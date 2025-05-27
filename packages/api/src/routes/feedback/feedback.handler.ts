import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, projectsTable, commentsTable } from "@/db/schema";
import type { GetOneRoute, ListRoute, UpdateStatusRoute } from "./feedback.routes";
import { sql } from "drizzle-orm";

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const activeProjectId = c.get("activeProjectId");

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
		.where(eq(feedbackTable.projectId, activeProjectId))

	return c.json(feedback);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
	const { id } = c.req.valid("param");

	const feedback = await db.query.feedbackTable.findFirst({
		where: eq(feedbackTable.id, id),
		with: {
			user: true,
		},
	});

	if (!feedback) {
		return c.json(
			{
				message: HttpStatusPhrases.NOT_FOUND,
			},
			HttpStatusCodes.NOT_FOUND,
		);
	}

	return c.json(feedback, HttpStatusCodes.OK);
};

export const updateStatus: AppRouteHandler<UpdateStatusRoute> = async (c) => {
	const { id } = c.req.valid("param");
	const { status, comment } = await c.req.json();
	const user = c.get("user");
	const platformUserId = user.id;

	// Start a transaction to handle both status update and optional comment
	return await db.transaction(async (tx) => {
		// First check if the feedback exists
		const feedback = await tx.query.feedbackTable.findFirst({
			where: eq(feedbackTable.id, id),
		});

		if (!feedback) {
			return c.json(
				{
					message: HttpStatusPhrases.NOT_FOUND,
				},
				HttpStatusCodes.NOT_FOUND,
			);
		}

		// Update the feedback status
		await tx.update(feedbackTable)
			.set({
				status,
				updatedAt: new Date()
			})
			.where(eq(feedbackTable.id, id));

		// If a comment was provided, add it
		if (comment) {
			await tx.insert(commentsTable).values({
				content: comment,
				feedbackId: id,
				authorPlatformUserId: platformUserId,
				isOfficialResponse: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		// Fetch the updated feedback
		const updatedFeedback = await tx.query.feedbackTable.findFirst({
			where: eq(feedbackTable.id, id),
			with: {
				user: true,
			},
		});

		return c.json(updatedFeedback, HttpStatusCodes.OK);
	});
};
