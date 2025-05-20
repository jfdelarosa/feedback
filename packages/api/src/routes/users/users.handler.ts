import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import type { AppRouteHandler } from "@/lib/types";
import { db } from "@/db";
import { clientUsersTable, projectsTable } from "@/db/schema";
import type { ListUsersRoute } from "./users.routes";

export const listUsers: AppRouteHandler<ListUsersRoute> = async (c) => {
    const organizationId = c.get('organizationId');

    // Get the projects for this organization
    const projects = await db.select({
        id: projectsTable.id,
    })
        .from(projectsTable)
        .where(eq(projectsTable.organizationId, organizationId));

    const projectIds = projects.map(project => project.id);

    // Get all users across the organization's projects
    const users = await db.select({
        id: clientUsersTable.id,
        name: clientUsersTable.name,
        email: clientUsersTable.email,
        avatar: clientUsersTable.avatar,
        projectId: clientUsersTable.projectId,
        externalId: clientUsersTable.externalId,
        metadata: clientUsersTable.metadata,
        createdAt: clientUsersTable.createdAt,
        updatedAt: clientUsersTable.updatedAt,
    })
        .from(clientUsersTable)
        .where(projectIds.length > 0 ?
            eq(clientUsersTable.projectId, projectIds[0]) :
            undefined);

    return c.json(users, HttpStatusCodes.OK);
}; 