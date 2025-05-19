import { Hono } from "hono";
import { eq, sql, and } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, commentsTable, clientUsersTable, feedbackVotesRelation } from "@/db/schema";
import type { AppEnv } from "@/lib/types";
import { Context } from "hono";
import { randomUUID } from "crypto";

const app = new Hono<AppEnv>();


function getProjectId(c: Context) {
    let token = c.req.header("Authorization")?.split(" ");

    if (!token) {
        throw new Error("No token provided")
    }

    if (token[0] !== "Bearer" || token.length !== 2) {
        throw new Error("Invalid token")
    }

    return token[1]
}


app.post("/identify", async (c) => {
    try {
        const projectId = getProjectId(c)
        const { email, name, avatar, externalId } = await c.req.json()

        if (!externalId) {
            return c.json({
                message: "User ID is required",
            }, 400)
        }

        const metadata = {}

        // Check if user already exists
        const existingUser = await db
            .select()
            .from(clientUsersTable)
            .where(
                and(
                    eq(clientUsersTable.externalId, externalId),
                    eq(clientUsersTable.projectId, projectId)
                )
            )
            .limit(1)


        if (existingUser.length > 0) {
            const oneHourAgo = new Date(Date.now() - 1 * 60 * 60 * 1000);

            // If updatedAt is older than 1 hour, update the user
            if (existingUser[0].updatedAt && existingUser[0].updatedAt < oneHourAgo) {
                // Update existing user
                await db
                    .update(clientUsersTable)
                    .set({
                        email,
                        name,
                        avatar,
                        metadata: metadata ? JSON.stringify(metadata) : null,
                        updatedAt: new Date(),
                    })
                    .where(
                        and(
                            eq(clientUsersTable.externalId, externalId),
                            eq(clientUsersTable.projectId, projectId)
                        )
                    )
            }

            return c.json({
                message: "User updated successfully",
                user: existingUser[0]
            })
        } else {
            // Create new user
            const newUser = await db
                .insert(clientUsersTable)
                .values({
                    id: Bun.randomUUIDv7(),
                    email,
                    name,
                    avatar,
                    projectId,
                    externalId,
                    metadata: metadata ? JSON.stringify(metadata) : null,
                })
                .returning()

            return c.json({
                message: "User created successfully",
                user: newUser[0]
            })
        }
    } catch (error) {
        console.error("Error in identify endpoint:", error)
        return c.json({
            message: "Failed to identify user",
            error: error instanceof Error ? error.message : "Unknown error"
        }, 500)
    }
})

// Get feedback by project ID
app.get("/feedback", async (c) => {
    try {
        const projectId = getProjectId(c)

        const feedback = await db.query.feedbackTable.findMany({
            with: {
                votes: {
                    columns: {
                        userId: true,
                    },
                },
                user: {
                    columns: {
                        id: true,
                        name: true,
                        avatar: true,
                        email: true,
                    },
                },
            },
            where: eq(feedbackTable.projectId, projectId),
        })


        return c.json(feedback);
    } catch (error) {
        console.error("Error fetching feedback:", error)

        return c.json(
            {
                message: "Invalid project ID or server error",
            },
            400
        );
    }
});

app.post("/feedback", async (c) => {
    try {
        const projectId = getProjectId(c)

        const { title, content, userId, } = await c.req.json()

        // Validate required fields
        if (!title || !content || !userId) {
            return c.json({
                message: "Missing required fields: title, content, userId",
            }, HttpStatusCodes.BAD_REQUEST)
        }

        // Verify the user exists
        const existingUser = await db
            .select()
            .from(clientUsersTable)
            .where(
                and(
                    eq(clientUsersTable.id, userId),
                    eq(clientUsersTable.projectId, projectId)
                )
            )
            .limit(1)

        if (existingUser.length === 0) {
            return c.json({
                message: "User not found",
            }, HttpStatusCodes.NOT_FOUND)
        }

        console.log(existingUser)

        // Create the feedback
        const feedback = await db.insert(feedbackTable).values({
            id: Bun.randomUUIDv7(),
            title,
            content,
            projectId,
            userId: existingUser[0].id,
        }).returning()

        return c.json({
            message: "Feedback created successfully",
            feedback: feedback[0]
        }, HttpStatusCodes.CREATED)

    } catch (error) {
        console.error("Error creating feedback:", error)

        // Check if it's a token error from getProjectId
        if (error instanceof Error &&
            (error.message === "No token provided" || error.message === "Invalid token")) {
            return c.json({
                message: error.message,
            }, HttpStatusCodes.UNAUTHORIZED)
        }

        return c.json({
            message: "Failed to create feedback",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR)
    }
})

// Get feedback details by ID
app.get("/feedback/:feedbackId", async (c) => {
    const feedbackId = c.req.param("feedbackId");

    try {
        // Get feedback with vote count
        const feedbackQuery = await db
            .select({
                id: feedbackTable.id,
                title: feedbackTable.title,
                content: feedbackTable.content,
                status: feedbackTable.status,
                createdAt: feedbackTable.createdAt,
                updatedAt: feedbackTable.updatedAt,
                userId: feedbackTable.userId,
                projectId: feedbackTable.projectId,
                votes: sql<number>`COUNT(${feedbackVotesTable.id})`.as("votes"),
            })
            .from(feedbackTable)
            .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
            .groupBy(feedbackTable.id)
            .where(eq(feedbackTable.id, feedbackId))
            .limit(1);

        if (feedbackQuery.length === 0) {
            return c.json(
                {
                    message: HttpStatusPhrases.NOT_FOUND,
                },
                HttpStatusCodes.NOT_FOUND
            );
        }

        const feedback = feedbackQuery[0];

        // Get comments for the feedback
        const comments = await db
            .select()
            .from(commentsTable)
            .where(eq(commentsTable.feedbackId, feedbackId));

        // Return combined response
        return c.json({
            ...feedback,
            comments,
        });
    } catch (error) {
        return c.json(
            {
                message: "Invalid feedback ID or server error",
            },
            400
        );
    }
});

// Vote on feedback
app.post("/feedback/:feedbackId/vote", async (c) => {
    try {
        const feedbackId = c.req.param("feedbackId");
        const { userId } = await c.req.json();

        if (!userId) {
            return c.json({
                message: "Missing required field: userId",
            }, HttpStatusCodes.BAD_REQUEST);
        }

        // Check if the feedback exists
        const feedback = await db
            .select()
            .from(feedbackTable)
            .where(eq(feedbackTable.id, feedbackId))
            .limit(1);

        if (feedback.length === 0) {
            return c.json({
                message: "Feedback not found",
            }, HttpStatusCodes.NOT_FOUND);
        }

        // Check if the user has already voted on this feedback
        const existingVote = await db
            .select()
            .from(feedbackVotesTable)
            .where(
                and(
                    eq(feedbackVotesTable.feedbackId, feedbackId),
                    eq(feedbackVotesTable.userId, userId)
                )
            )
            .limit(1);

        // Handle voting logic
        if (existingVote.length > 0) {
            // User already voted, remove the vote
            await db
                .delete(feedbackVotesTable)
                .where(eq(feedbackVotesTable.id, existingVote[0].id));
        } else {
            // User hasn't voted, add an upvote
            await db
                .insert(feedbackVotesTable)
                .values({
                    feedbackId,
                    userId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
        }

        const updatedFeedback = await db.query.feedbackTable.findFirst({
            where: eq(feedbackTable.id, feedbackId),
            with: {
                votes: {
                    columns: {
                        userId: true,
                    },
                },
                user: {
                    columns: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
            },
        });



        return c.json({
            message: "Vote toggled successfully",
            feedback: updatedFeedback
        });

    } catch (error) {
        console.error("Error voting on feedback:", error);

        // Check if it's a token error from getProjectId
        if (error instanceof Error &&
            (error.message === "No token provided" || error.message === "Invalid token")) {
            return c.json({
                message: error.message,
            }, HttpStatusCodes.UNAUTHORIZED);
        }

        return c.json({
            message: "Failed to vote on feedback",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
});

// Comment on feedback
app.post("/feedback/:feedbackId/comment", async (c) => {
    try {
        const projectId = getProjectId(c);
        const feedbackId = c.req.param("feedbackId");
        const { comment, userId } = await c.req.json();

        if (!comment || !comment.trim() || !userId) {
            return c.json({
                message: "Missing required fields: comment, userId",
            }, HttpStatusCodes.BAD_REQUEST);
        }

        // Verify the user exists
        const existingUser = await db
            .select()
            .from(clientUsersTable)
            .where(
                and(
                    eq(clientUsersTable.id, userId),
                    eq(clientUsersTable.projectId, projectId)
                )
            )
            .limit(1);

        if (existingUser.length === 0) {
            return c.json({
                message: "User not found",
            }, HttpStatusCodes.NOT_FOUND);
        }

        // Check if the feedback exists
        const feedback = await db
            .select()
            .from(feedbackTable)
            .where(eq(feedbackTable.id, feedbackId))
            .limit(1);

        if (feedback.length === 0) {
            return c.json({
                message: "Feedback not found",
            }, HttpStatusCodes.NOT_FOUND);
        }

        // Create the comment
        await db.insert(commentsTable).values({
            id: randomUUID(),
            content: comment,
            feedbackId,
            userId: existingUser[0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        // Get updated feedback with comments
        const updatedFeedback = await db
            .select({
                id: feedbackTable.id,
                title: feedbackTable.title,
                content: feedbackTable.content,
                status: feedbackTable.status,
                createdAt: feedbackTable.createdAt,
                updatedAt: feedbackTable.updatedAt,
                userId: feedbackTable.userId,
                projectId: feedbackTable.projectId,
                upvotes: sql<number>`SUM(CASE WHEN ${feedbackVotesTable.value} = 1 THEN 1 ELSE 0 END)`.as("upvotes"),
                downvotes: sql<number>`SUM(CASE WHEN ${feedbackVotesTable.value} = -1 THEN 1 ELSE 0 END)`.as("downvotes"),
                userVote: sql<number>`MAX(CASE WHEN ${feedbackVotesTable.userId} = ${existingUser[0].id} THEN ${feedbackVotesTable.value} ELSE NULL END)`.as("userVote"),
            })
            .from(feedbackTable)
            .leftJoin(feedbackVotesTable, eq(feedbackTable.id, feedbackVotesTable.feedbackId))
            .groupBy(feedbackTable.id)
            .where(eq(feedbackTable.id, feedbackId))
            .limit(1);

        // Get comments for this feedback
        const comments = await db
            .select({
                id: commentsTable.id,
                content: commentsTable.content,
                userId: commentsTable.userId,
                createdAt: commentsTable.createdAt,
            })
            .from(commentsTable)
            .where(eq(commentsTable.feedbackId, feedbackId))
            .orderBy(commentsTable.createdAt);

        // Combine feedback with comments
        const result = {
            ...updatedFeedback[0],
            comments,
        };

        return c.json({
            message: "Comment added successfully",
            feedback: result
        });

    } catch (error) {
        console.error("Error adding comment:", error);

        // Check if it's a token error from getProjectId
        if (error instanceof Error &&
            (error.message === "No token provided" || error.message === "Invalid token")) {
            return c.json({
                message: error.message,
            }, HttpStatusCodes.UNAUTHORIZED);
        }

        return c.json({
            message: "Failed to add comment",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
});

export default app; 