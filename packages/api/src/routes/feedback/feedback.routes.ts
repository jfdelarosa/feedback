import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema, IdUUIDParamsSchema } from "stoker/openapi/schemas";
import { feedbackTable } from "@/db/schema";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Projects"];

const selectFeedbackSchema = createSelectSchema(feedbackTable);
const createFeedbackSchema = createInsertSchema(feedbackTable);


export const list = createRoute({
	method: "get",
	path: "/feedback",
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			z.array(selectFeedbackSchema.extend({
				votes: z.number(),
			})),
			"The list of feedback",
		),
	},
	tags,
});

export const create = createRoute({
	method: "post",
	path: "/feedback",
	request: {
		body: {
			content: {
				"application/json": {
					schema: createFeedbackSchema,
				},
			},
		},
	},
	responses: {
		[HttpStatusCodes.BAD_REQUEST]: jsonContent(
			createErrorSchema(createFeedbackSchema),
			"Invalid feedback data",
		),
		[HttpStatusCodes.CREATED]: jsonContent(
			selectFeedbackSchema,
			"The created feedback",
		),
	},
	tags,
});

export const getOne = createRoute({
	method: "get",
	path: "/feedback/{id}",
	request: {
		params: IdUUIDParamsSchema,
	},
	responses: {
		[HttpStatusCodes.NOT_FOUND]: jsonContent(
			notFoundSchema,
			"Feedback not found",
		),
		[HttpStatusCodes.OK]: jsonContent(
			selectFeedbackSchema,
			"The requested feedback",
		),
		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
			createErrorSchema(IdParamsSchema),
			"Invalid id error",
		),
	},
	tags,
});

export const updateStatus = createRoute({
	method: "patch",
	path: "/feedback/{id}/status",
	request: {
		params: IdUUIDParamsSchema,
		body: {
			content: {
				"application/json": {
					schema: z.object({
						status: z.enum(["new", "in-progress", "completed", "declined"]),
						comment: z.string().optional(),
					}),
				},
			},
		},
	},
	responses: {
		[HttpStatusCodes.NOT_FOUND]: jsonContent(
			notFoundSchema,
			"Feedback not found",
		),
		[HttpStatusCodes.OK]: jsonContent(
			selectFeedbackSchema,
			"The updated feedback",
		),
		[HttpStatusCodes.BAD_REQUEST]: jsonContent(
			createErrorSchema(z.object({
				status: z.enum(["new", "in-progress", "completed", "declined"]),
				comment: z.string().optional(),
			})),
			"Invalid status update data",
		),
	},
	tags,
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type UpdateStatusRoute = typeof updateStatus;
