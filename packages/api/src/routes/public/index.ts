import { Hono } from "hono";
import { eq, sql, and, desc, asc } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, commentsTable, clientUsersTable, feedbackVotesRelation, projectsTable } from "@/db/schema";
import type { AppEnv } from "@/lib/types";
import { Context } from "hono";

const app = new Hono<AppEnv>();


function getProjectId(c: Context) {
    let projectId = c.req.header('X-PulseKit-Project');

    if (!projectId) {
        throw new Error("No project ID provided")
    }

    return projectId
}

function getUser(c: Context) {
    const user = c.req.header('X-PulseKit-User');

    return user ? JSON.parse(user) : null
}


app.post("/identify", async (c) => {
    try {
        const projectId = getProjectId(c)
        const user = getUser(c)

        if (!user) {
            return c.json({
                message: "User not found",
            }, 404)
        }

        const { email, name, avatar, externalId } = user

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
                comments: {
                    columns: {
                        id: true,
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
            orderBy: [desc(feedbackTable.createdAt)],
        })

        const feedbackWithCommentCount = feedback.map(item => ({
            ...item,
            comments: item.comments.length,
        }))

        return c.json(feedbackWithCommentCount);
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

// Get comments for a specific feedback item
app.get("/feedback/:feedbackId/comments", async (c) => {
    try {
        const feedbackId = c.req.param("feedbackId");

        const comments = await db.query.commentsTable.findMany({
            where: eq(commentsTable.feedbackId, feedbackId),
            orderBy: asc(commentsTable.createdAt),
            with: {
                user: true,
            },
        })

        return c.json({
            comments
        });
    } catch (error) {
        console.error("Error fetching comments:", error);

        return c.json({
            message: "Failed to fetch comments",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
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

        const feedbackId = Bun.randomUUIDv7()

        // Create the feedback
        await db.insert(feedbackTable).values({
            id: feedbackId,
            title,
            content,
            projectId,
            userId: existingUser[0].id,
        })

        const feedback = await db.query.feedbackTable.findFirst({
            where: eq(feedbackTable.id, feedbackId),
            with: {
                votes: {
                    columns: {
                        userId: true,
                    },
                },
                comments: {
                    columns: {
                        id: true,
                    },
                },
                user: {
                    columns: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                }
            }
        })


        const feedbackWithCommentCount = {
            ...feedback,
            comments: feedback?.comments.length || 0,
        }

        return c.json({
            message: "Feedback created successfully",
            feedback: feedbackWithCommentCount
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
        const user = getUser(c)

        if (!user) {
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

        // Check if the user has already voted on this feedback
        const existingVote = await db
            .select()
            .from(feedbackVotesTable)
            .where(
                and(
                    eq(feedbackVotesTable.feedbackId, feedbackId),
                    eq(feedbackVotesTable.userId, user.id)
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
                    userId: user.id,
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
        const feedbackId = c.req.param("feedbackId");
        const { comment, parentId } = await c.req.json();
        const user = getUser(c);

        if (!comment || !comment.trim()) {
            return c.json({
                message: "Missing required field: comment",
            }, HttpStatusCodes.BAD_REQUEST);
        }

        if (!user) {
            return c.json({
                message: "User not found",
            }, HttpStatusCodes.NOT_FOUND);
        }

        const commentId = Bun.randomUUIDv7()

        // Create the comment
        await db.insert(commentsTable).values({
            id: commentId,
            content: comment,
            feedbackId,
            userId: user.id,
        })

        const newComment = await db.query.commentsTable.findFirst({
            where: eq(commentsTable.id, commentId),
            with: {
                user: true,
            },
        })

        return c.json({
            message: "Comment added successfully",
            comment: newComment
        });
    } catch (error) {
        console.error("Error adding comment:", error);

        return c.json({
            message: "Failed to add comment",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
});

// Get project information
app.get("/project", async (c) => {
    try {
        const projectId = getProjectId(c);

        const project = await db
            .select()
            .from(projectsTable)
            .where(eq(projectsTable.id, projectId))
            .limit(1);

        if (project.length === 0) {
            return c.json({
                message: "Project not found",
            }, HttpStatusCodes.NOT_FOUND);
        }

        return c.json(project[0]);
    } catch (error) {
        console.error("Error fetching project:", error);

        return c.json({
            message: "Failed to fetch project information",
            error: error instanceof Error ? error.message : "Unknown error"
        }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
});

export default app; 