import { createRoute } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { projectsTable } from "@/db/schema";
import { z } from "zod";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Projects"];

const selectProjectSchema = createSelectSchema(projectsTable);

export const getDefaultProject = createRoute({
	method: "get",
	path: "/project/default",
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			selectProjectSchema,
			"The active project",
		),
	},
	tags,
});

export const updateProject = createRoute({
	method: "patch",
	path: "/project/:id",
	request: {
		body: {
			content: {
				"application/json": {
					schema: z.object({
						name: z.string().optional(),
						description: z.string().optional(),
						theme: z.string().optional(),
					}),
				},
			},
		},
	},
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			selectProjectSchema,
			"The updated project",
		),
		[HttpStatusCodes.NOT_FOUND]: jsonContent(
			notFoundSchema,
			"Feedback not found",
		),
	},
	tags,
});

export type GetDefaultProjectRoute = typeof getDefaultProject;
export type UpdateProjectRoute = typeof updateProject;
