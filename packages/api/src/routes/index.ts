import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppOpenAPI } from "@/lib/types";
import { BASE_PATH } from "@/lib/constants";
import createRouter from "@/lib/create-router";
import feedback from "@/routes/feedback/feedback.index";
import dashboard from "@/routes/dashboard/dashboard.index";
import projects from "@/routes/projects/projects.index";
import users from "@/routes/users/users.index";
import publicRoutes from "@/routes/public/index";
import { authMiddleware } from "@/middleware/auth";
import { auth } from "@/lib/auth";

export function registerRoutes(app: AppOpenAPI) {
    return app
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
        .use("*", cors({
            allowHeaders: ["Content-Type", "Authorization"],
            allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
            credentials: true,
            exposeHeaders: ["Content-Length"],
            maxAge: 600,
            origin: process.env.ORIGIN_URL!,
        }))
        .use("*", logger())
        .route("/public", publicRoutes)
        .on(["POST", "GET"], "/auth/*", async (c) => {
            console.log("auth route");

            return auth.handler(c.req.raw);
        })
        .use(authMiddleware)

        // Register protected routes
        .route("/", feedback)
        .route("/", dashboard)
        .route("/", projects)
        .route("/", users);

}

export const router = registerRoutes(
    createRouter().basePath(BASE_PATH),
);

export type Router = typeof router;
