import { createMiddleware } from "hono/factory";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { and, eq, desc } from "drizzle-orm";
import { feedbackTable, feedbackVotesTable, projectsTable, organization as organizationTable, member } from "@/db/schema";

export const authMiddleware = createMiddleware(async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) {
        c.set("user", null);
        c.set("session", null);
        return next();
    }

    c.set("user", session.user);
    c.set("session", session.session);

    const firstOrganization = await db.query.member.findFirst({
        where: and(
            eq(member.userId, session.user.id),
            eq(member.role, "admin")
        )
    })


    const projectId = await db.select({
        id: projectsTable.id,
    }).from(projectsTable).where(
        eq(projectsTable.organizationId, firstOrganization?.organizationId ?? "")
    )

    c.set("organizationId", firstOrganization?.organizationId);
    c.set("activeProjectId", projectId[0].id);


    await next();
});
