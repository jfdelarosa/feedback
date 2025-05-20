import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { clientUsersTable, feedbackTable, commentsTable, feedbackVotesTable } from "@/db/schema";

const tags = ["Users"];

const selectClientUserSchema = createSelectSchema(clientUsersTable);
const selectFeedbackSchema = createSelectSchema(feedbackTable);
const selectCommentSchema = createSelectSchema(commentsTable);
const selectFeedbackVotesSchema = createSelectSchema(feedbackVotesTable);

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

export type ListUsersRoute = typeof listUsers;
export type GetUserProfileRoute = typeof getUserProfile; 