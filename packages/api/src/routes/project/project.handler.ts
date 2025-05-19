import { eq } from "drizzle-orm";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";
import type { GetDefaultProjectRoute } from "./project.routes";
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
