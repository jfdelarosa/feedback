import { Hono } from "hono";
import { eq, sql, and } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { db } from "@/db";
import { feedbackTable, feedbackVotesTable, commentsTable, clientUsersTable } from "@/db/schema";
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
        const { id, email, name, avatar } = await c.req.json()

        if (!id) {
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
                    eq(clientUsersTable.externalId, id),
                    eq(clientUsersTable.projectId, projectId)
                )
            )
            .limit(1)


        console.log(existingUser)

        if (existingUser.length > 0) {
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
                        eq(clientUsersTable.externalId, id),
                        eq(clientUsersTable.projectId, projectId)
                    )
                )

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
                    externalId: id,
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

        const feedback = await db
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
            .where(eq(feedbackTable.projectId, projectId));

        return c.json(feedback);
    } catch (error) {
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
                    eq(clientUsersTable.externalId, userId),
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

export default app; 