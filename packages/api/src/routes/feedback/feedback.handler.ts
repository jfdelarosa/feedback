import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, organizationsTable } from "@/db/schema";
import type { CreateRoute, GetOneRoute, ListRoute } from "./feedback.routes";
import { getAuth } from '@hono/clerk-auth'
import { sql } from "drizzle-orm";
import { createSelectSchema } from "drizzle-zod";

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const organizationId = c.get('organizationId')

	const feedback = await db.select(
		{
			id: feedbackTable.id,
			title: feedbackTable.title,
			description: feedbackTable.description,
			status: feedbackTable.status,
			createdAt: feedbackTable.createdAt,
			updatedAt: feedbackTable.updatedAt,
			organizationId: feedbackTable.organizationId,
			userId: feedbackTable.userId,
			projectId: feedbackTable.projectId,
			votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as('votes'),
		}
	)
		.from(feedbackTable)
		.leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
		.groupBy(feedbackTable.id)
		.where(eq(feedbackTable.organizationId, organizationId))

	return c.json(feedback);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
	const data = await c.req.valid("json");

	const auth = getAuth(c)
	const clerkClient = c.get('clerk')

	const { data: organizationData } = await clerkClient.users.getOrganizationMembershipList({ userId: auth?.userId! })

	const organizationId = organizationData[0].organization.id

	const newFeedback = await db.insert(feedbackTable)
		.values({
			id: Bun.randomUUIDv7(),
			title: data.title,
			description: data.description,
			organizationId: organizationId,
			userId: auth?.userId!,
		})
		.returning();

	return c.json(newFeedback[0], HttpStatusCodes.CREATED);
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
