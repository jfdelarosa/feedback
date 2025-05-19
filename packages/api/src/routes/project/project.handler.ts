import { eq } from "drizzle-orm";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { organizationsTable, projectsTable } from "@/db/schema";
import type { GetDefaultProjectRoute } from "./project.routes";
import { getAuth } from '@hono/clerk-auth'

import { and } from "drizzle-orm";

export const getDefaultProject: AppRouteHandler<GetDefaultProjectRoute> = async (c) => {
	const auth = getAuth(c)
	const clerkClient = c.get('clerk')

	console.log(auth)

	const { data } = await clerkClient.users.getOrganizationMembershipList({ userId: auth?.userId! })

	const organizationId = data[0].organization.id

	const [organization] = await db
		.select()
		.from(organizationsTable)
		.where(
			eq(organizationsTable.clerkId, organizationId)
		)
		.limit(1)


	const project = await db.select()
		.from(projectsTable)
		.where(
			and(
				eq(projectsTable.isDefault, true),
				eq(projectsTable.organizationId, organization.id)
			)
		)
		.limit(1)
	return c.json(project[0]);
};
