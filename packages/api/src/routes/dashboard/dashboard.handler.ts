import { eq, desc } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, organizationsTable, projectsTable } from "@/db/schema";
import type { RecentFeedbackRoute, TopVotedFeedbackRoute } from "./dashboard.routes";
import { getAuth } from '@hono/clerk-auth';
import { sql } from "drizzle-orm";

export const recentFeedback: AppRouteHandler<RecentFeedbackRoute> = async (c) => {
    const organizationId = c.get('organizationId')

    const projectId = await db.select({
        id: projectsTable.id,
    }).from(projectsTable).where(eq(projectsTable.organizationId, organizationId))


    const feedback = await db.select({
        id: feedbackTable.id,
        title: feedbackTable.title,
        content: feedbackTable.content,
        status: feedbackTable.status,
        createdAt: feedbackTable.createdAt,
        updatedAt: feedbackTable.updatedAt,
        userId: feedbackTable.userId,
        projectId: feedbackTable.projectId,
        votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
    })
        .from(feedbackTable)
        .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
        .groupBy(feedbackTable.id)
        .where(eq(feedbackTable.projectId, projectId[0].id))
        .orderBy(desc(feedbackTable.createdAt))
        .limit(10);

    return c.json(feedback, HttpStatusCodes.OK);
};

export const topVotedFeedback: AppRouteHandler<TopVotedFeedbackRoute> = async (c) => {
    const organizationId = c.get('organizationId')

    const projectId = await db.select({
        id: projectsTable.id,
    }).from(projectsTable).where(eq(projectsTable.organizationId, organizationId))

    const feedback = await db.select({
        id: feedbackTable.id,
        title: feedbackTable.title,
        content: feedbackTable.content,
        status: feedbackTable.status,
        createdAt: feedbackTable.createdAt,
        updatedAt: feedbackTable.updatedAt,
        userId: feedbackTable.userId,
        projectId: feedbackTable.projectId,
        votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
    })
        .from(feedbackTable)
        .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
        .groupBy(feedbackTable.id)
        .where(eq(feedbackTable.projectId, projectId[0].id))
        .orderBy(desc(sql<number>`COUNT(${feedbackVotesTable.id})`))
        .limit(10);

    return c.json(feedback, HttpStatusCodes.OK);
}; 