import { eq, desc } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, organizationsTable } from "@/db/schema";
import type { RecentFeedbackRoute, TopVotedFeedbackRoute } from "./dashboard.routes";
import { getAuth } from '@hono/clerk-auth';
import { sql } from "drizzle-orm";

export const recentFeedback: AppRouteHandler<RecentFeedbackRoute> = async (c) => {
    const auth = getAuth(c);
    const clerkClient = c.get('clerk');

    const { data } = await clerkClient.users.getOrganizationMembershipList({ userId: auth?.userId! });
    const organizationId = data[0].organization.id;

    const feedback = await db.select({
        id: feedbackTable.id,
        title: feedbackTable.title,
        description: feedbackTable.description,
        status: feedbackTable.status,
        createdAt: feedbackTable.createdAt,
        updatedAt: feedbackTable.updatedAt,
        organizationId: feedbackTable.organizationId,
        userId: feedbackTable.userId,
        votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
    })
        .from(feedbackTable)
        .leftJoin(organizationsTable, eq(feedbackTable.organizationId, organizationsTable.id))
        .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
        .groupBy(feedbackTable.id)
        .where(eq(organizationsTable.clerkId, organizationId))
        .orderBy(desc(feedbackTable.createdAt))
        .limit(10);

    return c.json(feedback, HttpStatusCodes.OK);
};

export const topVotedFeedback: AppRouteHandler<TopVotedFeedbackRoute> = async (c) => {
    const auth = getAuth(c);
    const clerkClient = c.get('clerk');

    const { data } = await clerkClient.users.getOrganizationMembershipList({ userId: auth?.userId! });
    const organizationId = data[0].organization.id;

    const feedback = await db.select({
        id: feedbackTable.id,
        title: feedbackTable.title,
        description: feedbackTable.description,
        status: feedbackTable.status,
        createdAt: feedbackTable.createdAt,
        updatedAt: feedbackTable.updatedAt,
        organizationId: feedbackTable.organizationId,
        userId: feedbackTable.userId,
        votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
    })
        .from(feedbackTable)
        .leftJoin(organizationsTable, eq(feedbackTable.organizationId, organizationsTable.id))
        .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
        .groupBy(feedbackTable.id)
        .where(eq(organizationsTable.clerkId, organizationId))
        .orderBy(desc(sql<number>`COUNT(${feedbackVotesTable.id})`))
        .limit(10);

    return c.json(feedback, HttpStatusCodes.OK);
}; 