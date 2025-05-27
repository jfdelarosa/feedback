import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { clientUsersTable, feedbackTable, commentsTable, feedbackVotesTable, userClientIdentitiesTable } from "@/db/schema";

const tags = ["Users"];

const selectClientUserSchema = createSelectSchema(clientUsersTable);
const selectFeedbackSchema = createSelectSchema(feedbackTable);
const selectCommentSchema = createSelectSchema(commentsTable);
const selectFeedbackVotesSchema = createSelectSchema(feedbackVotesTable);
const selectUserClientIdentitiesSchema = createSelectSchema(userClientIdentitiesTable);

export const listUsers = createRoute({
    method: "get",
    path: "/users/list",
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectClientUserSchema),
            "The list of users",
        ),
    },
    tags,
});

export const getUserProfile = createRoute({
    method: "get",
    path: "/users/:id",
    request: {
        params: z.object({
            id: z.string(),
        }),
    },
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.object({
                user: selectClientUserSchema,
                feedback: z.array(selectFeedbackSchema),
                comments: z.array(selectCommentSchema),
                likedFeedback: z.array(selectFeedbackSchema),
            }),
            "User profile with feedback, comments, and liked feedback"
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "User not found"
        ),
    },
    tags,
});

export const claimClientUser = createRoute({
    method: "post",
    path: "/users/claim/:id",
    request: {
        params: z.object({
            id: z.string().describe("Client user ID to claim"),
        }),
        body: {
            content: {
                "application/json": {
                    schema: z.object({
                        verificationMethod: z.enum(["email"]).optional().describe("Method used to verify ownership"),
                    }),
                },
            },
        },
    },
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.object({
                success: z.boolean(),
                identity: selectUserClientIdentitiesSchema,
                message: z.string().optional(),
            }),
            "Successfully claimed client user"
        ),
        [HttpStatusCodes.BAD_REQUEST]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "Invalid request"
        ),
        [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "Authentication required"
        ),
        [HttpStatusCodes.CONFLICT]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "Client user already claimed"
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "Client user not found"
        ),
        [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
            z.object({
                message: z.string(),
            }),
            "Server error"
        ),
    },
    tags,
});

export type ListUsersRoute = typeof listUsers;
export type GetUserProfileRoute = typeof getUserProfile;
export type ClaimClientUserRoute = typeof claimClientUser; 