import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { feedbackTable } from "@/db/schema";
import type { CreateRoute, GetOneRoute, ListRoute } from "./feedback.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const feedback = await db.select()
		.from(feedbackTable)

	return c.json(feedback);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
	const data = await c.req.valid("json");

	const newFeedback = await db.insert(feedbackTable)
		.values({
			id: Bun.randomUUIDv7(),
			title: data.title,
			description: data.description,
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
