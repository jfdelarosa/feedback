import { clerkMiddleware } from '@hono/clerk-auth'
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppOpenAPI } from "@/lib/types";
import { BASE_PATH } from "@/lib/constants";
import createRouter from "@/lib/create-router";
import feedback from "@/routes/feedback/feedback.index";

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
        .use("*", cors({
            allowHeaders: ["Content-Type", "Authorization"],
            allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
            credentials: true,
            exposeHeaders: ["Content-Length"],
            maxAge: 600,
            origin: process.env.ORIGIN_URL!,
        }))
        .use("*", logger())
        .get("/health", (c) => {
            return c.json({
                status: "ok",
                timestamp: new Date().toISOString(),
                uptime: process.uptime(),
            });
        })
        // Apply auth middleware to subsequent routes
        .use("*", clerkMiddleware())
        .route("/", feedback)
}

export const router = registerRoutes(
    createRouter().basePath(BASE_PATH),
);

export type Router = typeof router;
