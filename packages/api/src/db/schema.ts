import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
    uuid,
    foreignKey,
    primaryKey,
} from "drizzle-orm/pg-core";

// User table for users identified via Clerk
export const usersTable = pgTable("users", {
    id: text().primaryKey(),
    email: varchar({ length: 255 }),
    clerkId: text(),
    organizationId: text(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    firstName: varchar({ length: 255 }),
    lastName: varchar({ length: 255 }),
    imageUrl: varchar({ length: 255 }),
});

// Organizations table for customer organizations
export const organizationsTable = pgTable("organizations", {
    id: text().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    clerkId: text(),
    clerkUserId: text(),
    createdBy: text(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Feedback table
export const feedbackTable = pgTable("feedback", {
    id: text().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    status: varchar({ length: 50 }).default("open").notNull(), // open, in-progress, completed, declined
    organizationId: text().notNull().references(() => organizationsTable.id),
    userId: text().notNull().references(() => usersTable.id), // User who submitted the feedback
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Feedback votes table
export const feedbackVotesTable = pgTable("feedback_votes", {
    id: uuid().defaultRandom().primaryKey(),
    feedbackId: text().notNull().references(() => feedbackTable.id, { onDelete: "cascade" }),
    userId: text().notNull().references(() => usersTable.id),
    createdAt: timestamp().notNull().defaultNow(),
});

// Comments table
export const commentsTable = pgTable("comments", {
    id: uuid().defaultRandom().primaryKey(),
    content: text().notNull(),
    feedbackId: text().notNull().references(() => feedbackTable.id, { onDelete: "cascade" }),
    userId: text().notNull().references(() => usersTable.id),
    // For nested comments/replies - nullable parentId for top-level comments
    parentId: uuid(), // Will be used to reference another comment
    isOfficialResponse: boolean().default(false).notNull(), // To mark official team responses
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Comment votes table
export const commentVotesTable = pgTable("comment_votes", {
    id: uuid().defaultRandom().primaryKey(),
    commentId: uuid().notNull().references(() => commentsTable.id, { onDelete: "cascade" }),
    userId: text().notNull().references(() => usersTable.id),
    createdAt: timestamp().notNull().defaultNow(),
});

// NOTE: The parentId in commentsTable is intended to reference another comment's id
// This self-referential relationship will need to be handled in the migration file
// or with manual SQL rather than in the schema definition to avoid TypeScript circular references