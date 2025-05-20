import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import type { GetDefaultProjectRoute, UpdateProjectRoute } from "./project.routes";
import { and } from "drizzle-orm";


export const getDefaultProject: AppRouteHandler<GetDefaultProjectRoute> = async (c) => {
	const organizationId = c.get('organizationId')

	const project = await db.select()
		.from(projectsTable)
		.where(
			and(
				eq(projectsTable.isDefault, true),
				eq(projectsTable.organizationId, organizationId)
			)
		)
		.limit(1)
	return c.json(project[0]);
};

export const updateProject: AppRouteHandler<UpdateProjectRoute> = async (c) => {
	const projectId = c.req.param('id');
	const organizationId = c.get('organizationId');
	const body = await c.req.valid('json');

	// Verify project belongs to the organization
	const existingProject = await db.select()
		.from(projectsTable)
		.where(
			and(
				eq(projectsTable.id, projectId),
				eq(projectsTable.organizationId, organizationId)
			)
		)
		.limit(1);

	if (!existingProject.length) {
		return c.json(
			{
				message: HttpStatusPhrases.NOT_FOUND,
			},
			HttpStatusCodes.NOT_FOUND,
		)
	}

	// Update project with provided fields
	const updatedProject = await db.update(projectsTable)
		.set({
			name: body.name,
			description: body.description,
			theme: body.theme,
			updatedAt: new Date()
		})
		.where(eq(projectsTable.id, projectId))
		.returning();

	return c.json(updatedProject[0], HttpStatusCodes.OK);
};
