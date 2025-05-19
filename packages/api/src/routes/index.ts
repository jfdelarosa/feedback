import { clerkMiddleware } from '@hono/clerk-auth'
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppOpenAPI } from "@/lib/types";
import { BASE_PATH } from "@/lib/constants";
import createRouter from "@/lib/create-router";
import feedback from "@/routes/feedback/feedback.index";
import clerk from "@/routes/clerk/clerk.index";
import dashboard from "@/routes/dashboard/dashboard.index";
import project from "@/routes/project/project.index";
import publicRoutes from "@/routes/public/index";
import { getAuth } from '@hono/clerk-auth'
import { db } from '@/db'
import { organizationsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

export function registerRoutes(app: AppOpenAPI) {
    const router = app
        // .doc(
        //     "/doc",
        //     {
        //         info: {
        //             title: "My API",
        //             version: "1.0.0",
        //         },
        //         openapi: "3.0.0",
        //     },
        // )
        .use("*", cors())
        .use("*", logger());

    // Register public routes first (no auth required)
    router.route("/public", publicRoutes);

    // Apply auth middleware to protected routes
    router.use("*", clerkMiddleware({
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
        secretKey: process.env.CLERK_SECRET_KEY!,
    }));

    // Apply organization middleware to authenticated routes
    router.use("*", async (c, next) => {
        const auth = getAuth(c)
        const clerkClient = c.get('clerk')
        const { data } = await clerkClient.users.getOrganizationMembershipList({ userId: auth?.userId! })
        const organizationId = data[0].organization.id
        const [organization] = await db
            .select({
                id: organizationsTable.id,
            })
            .from(organizationsTable)
            .where(
                eq(organizationsTable.clerkId, organizationId)
            )
            .limit(1)

        c.set('organizationId', organization.id)

        await next()
    });

    // Register protected routes
    router.route("/", feedback)
        .route("/", clerk)
        .route("/", dashboard)
        .route("/", project);

    return router;
}

export const router = registerRoutes(
    createRouter().basePath(BASE_PATH),
);

export type Router = typeof router;
