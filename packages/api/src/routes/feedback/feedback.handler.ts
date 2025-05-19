import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, projectsTable } from "@/db/schema";
import type { GetOneRoute, ListRoute } from "./feedback.routes";
import { sql } from "drizzle-orm";

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const organizationId = c.get('organizationId')

	const projectId = await db.select({
		id: projectsTable.id,
	}).from(projectsTable).where(eq(projectsTable.organizationId, organizationId))

	const feedback = await db.select(
		{
			id: feedbackTable.id,
			title: feedbackTable.title,
			content: feedbackTable.content,
			status: feedbackTable.status,
			createdAt: feedbackTable.createdAt,
			updatedAt: feedbackTable.updatedAt,
			userId: feedbackTable.userId,
			projectId: feedbackTable.projectId,
			votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
		}
	)
		.from(feedbackTable)
		.leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
		.groupBy(feedbackTable.id)
		.where(eq(feedbackTable.projectId, projectId[0].id))

	return c.json(feedback);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
	const { id } = c.req.valid("param");

	const feedback = await db.select()
		.from(feedbackTable)
		.where(
			eq(feedbackTable.id, id),
		)
		.limit(1);

	if (!feedback) {
		return c.json(
			{
				message: HttpStatusPhrases.NOT_FOUND,
			},
			HttpStatusCodes.NOT_FOUND,
		);
	}

	return c.json(feedback[0], HttpStatusCodes.OK);
};
