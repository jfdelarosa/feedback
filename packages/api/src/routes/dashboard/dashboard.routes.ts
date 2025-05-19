import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { feedbackTable } from "@/db/schema";

const tags = ["Dashboard"];

const selectFeedbackSchema = createSelectSchema(feedbackTable);

export const recentFeedback = createRoute({
    method: "get",
    path: "/dashboard/recent-feedback",
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectFeedbackSchema.extend({
                votes: z.number(),
            })),
            "The list of recent feedback",
        ),
    },
    tags,
});

export const topVotedFeedback = createRoute({
    method: "get",
    path: "/dashboard/top-voted-feedback",
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectFeedbackSchema.extend({
                votes: z.number(),
            })),
            "The list of top voted feedback",
        ),
    },
    tags,
});

export type RecentFeedbackRoute = typeof recentFeedback;
export type TopVotedFeedbackRoute = typeof topVotedFeedback; 