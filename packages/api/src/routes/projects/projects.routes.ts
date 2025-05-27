import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema, createUpdateSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema, IdUUIDParamsSchema } from "stoker/openapi/schemas";
import { projectsTable } from "@/db/schema";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Projects"];

const selectProjectSchema = createSelectSchema(projectsTable);

// Schema for creating a new project
const createProjectSchema = z.object({
	description: z.string().optional(),
	metadata: z.record(z.any()).optional(),
	name: z.string().min(1).max(255),
	organizationId: z.string().optional(),
});

const updateProjectSchema = createUpdateSchema(projectsTable);

export const list = createRoute({
	method: "get",
	path: "/projects",
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			z.array(selectProjectSchema),
			"The list of projects",
		),
	},
	tags,
});

export const create = createRoute({
	method: "post",
	path: "/projects",
	request: {
		body: {
			content: {
				"application/json": {
					schema: createProjectSchema,
				},
			},
		},
	},
	responses: {
		[HttpStatusCodes.BAD_REQUEST]: jsonContent(
			createErrorSchema(createProjectSchema),
			"Invalid project data",
		),
		[HttpStatusCodes.CREATED]: jsonContent(
			selectProjectSchema,
			"The created project",
		),
	},
	tags,
});

export const getOne = createRoute({
	method: "get",
	path: "/projects/{id}",
	request: {
		params: z.object({
			id: z.string().optional(),
		}),
	},
	responses: {
		[HttpStatusCodes.NOT_FOUND]: jsonContent(
			notFoundSchema,
			"Project not found",
		),
		[HttpStatusCodes.OK]: jsonContent(
			selectProjectSchema,
			"The requested project",
		),
		[HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
			createErrorSchema(IdParamsSchema),
			"Invalid id error",
		),
	},
	tags,
});

export const update = createRoute({
	method: "patch",
	path: "/projects/{id}",
	request: {
		params: IdUUIDParamsSchema,
		body: {
			content: {
				"application/json": {
					schema: updateProjectSchema,
				},
			},
		},
	},
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			selectProjectSchema,
			"The updated project",
		),
	},
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type UpdateRoute = typeof update;