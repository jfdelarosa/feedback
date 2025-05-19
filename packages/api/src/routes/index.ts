import { clerkMiddleware } from '@hono/clerk-auth'
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppOpenAPI } from "@/lib/types";
import { BASE_PATH } from "@/lib/constants";
import createRouter from "@/lib/create-router";
import feedback from "@/routes/feedback/feedback.index";
import clerk from "@/routes/clerk/clerk.index";

export function registerRoutes(app: AppOpenAPI) {
    return app
        .doc(
            "/doc",
            {
                info: {
                    title: "My API",
                    version: "1.0.0",
                },
                openapi: "3.0.0",
            },
        )
        .use("*", cors())
        .use("*", logger())
        .get("/health", (c) => {
            return c.json({
                status: "ok",
                timestamp: new Date().toISOString(),
                uptime: process.uptime(),
            });
        })
        // Apply auth middleware to subsequent routes
        .use("*", clerkMiddleware({
            publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
            secretKey: process.env.CLERK_SECRET_KEY!,
        }))
        .route("/", feedback)
        .route("/", clerk)
}

export const router = registerRoutes(
    createRouter().basePath(BASE_PATH),
);

export type Router = typeof router;
