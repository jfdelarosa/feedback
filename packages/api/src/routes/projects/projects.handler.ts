import { and, eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import type { CreateRoute, GetOneRoute, ListRoute } from "./projects.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
	const organizationId = c.get("organizationId");

	const projects = await db.select()
		.from(projectsTable)
		.where(
			eq(projectsTable.organizationId, organizationId),
		);

	return c.json(projects);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
	const organizationId = c.get("organizationId");
	const user = c.get("user");
	const data = await c.req.valid("json");

	const newProject = await db.insert(projectsTable)
		.values({
			id: Bun.randomUUIDv7(),
			name: data.name,
			description: data.description || null,
			organizationId: organizationId,
			createdBy: user.id,
			theme: "light",
			isDefault: true,
		})
		.returning();

	return c.json(newProject[0], HttpStatusCodes.CREATED);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
	const organizationId = c.get("organizationId");
	let { id } = c.req.valid("param");

	if (id === "current") {
		id = c.get("activeProjectId");
	}



	const project = await db.select()
		.from(projectsTable)
		.where(
			and(
				eq(projectsTable.organizationId, organizationId),
				eq(projectsTable.id, id!),
			),
		)
		.limit(1);



	if (!project.length) {
		return c.json(
			{
				message: HttpStatusPhrases.NOT_FOUND,
			},
			HttpStatusCodes.NOT_FOUND,
		);
	}


	return c.json(project[0], HttpStatusCodes.OK);
};