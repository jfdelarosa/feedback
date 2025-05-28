import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema, IdUUIDParamsSchema } from "stoker/openapi/schemas";
import { feedbackTable, commentsTable } from "@/db/schema";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Projects"];

const selectFeedbackSchema = createSelectSchema(feedbackTable);
const createFeedbackSchema = createInsertSchema(feedbackTable);
const selectCommentSchema = createSelectSchema(commentsTable);


export const list = createRoute({
	method: "get",
	path: "/feedback",
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			z.array(selectFeedbackSchema.extend({
				votes: z.number(),
				comments_count: z.number(),
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

export const getComments = createRoute({
	method: "get",
	path: "/feedback/{id}/comments",
	request: {
		params: IdUUIDParamsSchema,
	},
	responses: {
		[HttpStatusCodes.NOT_FOUND]: jsonContent(
			notFoundSchema,
			"Feedback not found",
		),
		[HttpStatusCodes.OK]: jsonContent(
			z.array(selectCommentSchema.extend({
				authorPlatformUser: z.object({
					id: z.string(),
					name: z.string().nullable(),
					email: z.string(),
					image: z.string().nullable(),
				}).nullable(),
				representingClientUser: z.object({
					id: z.string(),
					name: z.string().nullable(),
					email: z.string().nullable(),
					avatar: z.string().nullable(),
				}).nullable(),
			})),
			"Comments for the feedback",
		),
	},
	tags,
});

export const addComment = createRoute({
	method: "post",
	path: "/feedback/{id}/comments",
	request: {
		params: IdUUIDParamsSchema,
		body: {
			content: {
				"application/json": {
					schema: z.object({
						content: z.string(),
						parentId: z.string().uuid().optional(),
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
		[HttpStatusCodes.CREATED]: jsonContent(
			selectCommentSchema,
			"The created comment",
		),
		[HttpStatusCodes.BAD_REQUEST]: jsonContent(
			createErrorSchema(z.object({
				content: z.string(),
				parentId: z.string().uuid().optional(),
			})),
			"Invalid comment data",
		),
	},
	tags,
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type UpdateStatusRoute = typeof updateStatus;
export type GetCommentsRoute = typeof getComments;
export type AddCommentRoute = typeof addComment;
