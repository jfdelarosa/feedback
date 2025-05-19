import { createRoute } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { projectsTable } from "@/db/schema";
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

export type GetDefaultProjectRoute = typeof getDefaultProject;
