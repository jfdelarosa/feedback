import { eq, and } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { clientUsersTable, projectsTable, feedbackTable, commentsTable, feedbackVotesTable, userClientIdentitiesTable } from "@/db/schema";
import type { ListUsersRoute, GetUserProfileRoute, ClaimClientUserRoute } from "./users.routes";

export const listUsers: AppRouteHandler<ListUsersRoute> = async (c) => {
    const activeProjectId = c.get('activeProjectId');

    // Get all users across the organization's projects
    const users = await db.select({
        id: clientUsersTable.id,
        name: clientUsersTable.name,
        email: clientUsersTable.email,
        avatar: clientUsersTable.avatar,
        projectId: clientUsersTable.projectId,
        externalId: clientUsersTable.externalId,
        metadata: clientUsersTable.metadata,
        createdAt: clientUsersTable.createdAt,
        updatedAt: clientUsersTable.updatedAt,
    })
        .from(clientUsersTable)
        .where(eq(clientUsersTable.projectId, activeProjectId));

    return c.json(users, HttpStatusCodes.OK);
};

export const getUserProfile: AppRouteHandler<GetUserProfileRoute> = async (c) => {
    const { id } = c.req.valid("param");
    const activeProjectId = c.get('activeProjectId');

    // Get user
    const user = await db.select().from(clientUsersTable).where(eq(clientUsersTable.id, id)).limit(1);

    if (!user || user.length === 0) {
        return c.json(
            { message: HttpStatusPhrases.NOT_FOUND },
            HttpStatusCodes.NOT_FOUND
        );
    }

    // Get projects for this organization to ensure we only return feedback from the user's projects
    const projects = await db.select({
        id: projectsTable.id,
    })
        .from(projectsTable)
        .where(eq(projectsTable.id, activeProjectId));

    const projectIds = projects.map(project => project.id);

    // Make sure user belongs to one of these projects
    if (!projectIds.includes(user[0].projectId)) {
        return c.json(
            { message: "User not found in organization's projects" },
            HttpStatusCodes.NOT_FOUND
        );
    }

    // Get feedback created by user
    const feedback = await db.select()
        .from(feedbackTable)
        .where(eq(feedbackTable.userId, id));

    // Get comments by user
    const comments = await db.select()
        .from(commentsTable)
        .where(eq(commentsTable.representingClientUserId, id));

    // Get feedback liked by user
    const feedbackVotes = await db.select({
        feedbackId: feedbackVotesTable.feedbackId,
    })
        .from(feedbackVotesTable)
        .where(eq(feedbackVotesTable.userId, id));

    const likedFeedbackIds = feedbackVotes.map(vote => vote.feedbackId);

    const likedFeedback = likedFeedbackIds.length > 0
        ? await db.select()
            .from(feedbackTable)
            .where(eq(feedbackTable.id, likedFeedbackIds[0]))
        : [];

    return c.json({
        user: user[0],
        feedback,
        comments,
        likedFeedback,
    }, HttpStatusCodes.OK);
};

export const claimClientUser: AppRouteHandler<ClaimClientUserRoute> = async (c) => {
    const { id: clientUserId } = c.req.valid("param");
    const activeProjectId = c.get('activeProjectId');
    const session = c.get('session');

    // Verify the client user exists and belongs to the active project
    const clientUser = await db.select()
        .from(clientUsersTable)
        .where(
            and(
                eq(clientUsersTable.id, clientUserId),
                eq(clientUsersTable.projectId, activeProjectId)
            )
        )
        .limit(1);

    if (!clientUser || clientUser.length === 0) {
        return c.json(
            { message: "Client user not found in this project" },
            HttpStatusCodes.NOT_FOUND
        );
    }

    // Check if this client user is already claimed by any platform user
    const existingClaim = await db.select()
        .from(userClientIdentitiesTable)
        .where(
            and(
                eq(userClientIdentitiesTable.clientUserId, clientUserId),
                eq(userClientIdentitiesTable.projectId, activeProjectId)
            )
        )
        .limit(1);

    if (existingClaim && existingClaim.length > 0) {
        // If already claimed by the same user, return success
        if (existingClaim[0].platformUserId === session?.user.id) {
            return c.json({
                success: true,
                identity: existingClaim[0],
                message: "You have already claimed this client user"
            }, HttpStatusCodes.OK);
        }

        // If claimed by another user, return conflict
        return c.json(
            { message: "This client user has already been claimed by another platform user" },
            HttpStatusCodes.CONFLICT
        );
    }

    // Create the user-client identity mapping
    const now = new Date();
    const identity = await db.insert(userClientIdentitiesTable)
        .values({
            id: Bun.randomUUIDv7(),
            platformUserId: session?.user.id,
            clientUserId: clientUserId,
            projectId: activeProjectId,
            verifiedAt: now,
            createdAt: now,
            updatedAt: now
        })
        .returning();

    return c.json({
        success: true,
        identity: identity[0]
    }, HttpStatusCodes.OK);
}; 