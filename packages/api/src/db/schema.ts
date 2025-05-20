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
    jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
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

// Projects table
export const projectsTable = pgTable("projects", {
    id: text().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    organizationId: text().notNull().references(() => organizationsTable.id, { onDelete: "cascade" }),
    createdBy: text().notNull().references(() => usersTable.id),
    isDefault: boolean().default(true).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    theme: varchar({ length: 255 }).default("light").notNull(),
});

// Feedback table
export const feedbackTable = pgTable("feedback", {
    id: text().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    status: varchar({ length: 50 }).default("open").notNull(), // open, in-progress, completed, declined
    userId: text().notNull().references(() => clientUsersTable.id), // User who submitted the feedback
    projectId: text().references(() => projectsTable.id),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Feedback votes table
export const feedbackVotesTable = pgTable("feedback_votes", {
    id: uuid().defaultRandom().primaryKey(),
    feedbackId: text().notNull().references(() => feedbackTable.id, { onDelete: "cascade" }),
    userId: text().notNull().references(() => clientUsersTable.id),
    value: integer().default(1).notNull(), // 1 for upvote, -1 for downvote
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
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

// Client users table (for end users of our customers' applications)
export const clientUsersTable = pgTable("client_users", {
    id: text().primaryKey(),
    email: varchar({ length: 255 }),
    name: varchar({ length: 255 }),
    avatar: text(),
    projectId: text().notNull().references(() => projectsTable.id, { onDelete: "cascade" }),
    externalId: text(), // Optional ID from the customer's system
    metadata: jsonb(), // JSON string for additional custom data
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Feedback votes relation
export const feedbackVotesRelation = relations(feedbackTable, ({ one, many }) => ({
    votes: many(feedbackVotesTable),
    comments: many(commentsTable),
    user: one(clientUsersTable, {
        fields: [feedbackTable.userId],
        references: [clientUsersTable.id],
    }),
}));

// Feedback votes to feedback relation
export const feedbackVotesToFeedbackRelation = relations(feedbackVotesTable, ({ one }) => ({
    feedback: one(feedbackTable, {
        fields: [feedbackVotesTable.feedbackId],
        references: [feedbackTable.id],
    }),
}));

export const feedbackCommentsRelation = relations(commentsTable, ({ one, many }) => ({
    feedback: one(feedbackTable, {
        fields: [commentsTable.feedbackId],
        references: [feedbackTable.id],
    }),
    user: one(clientUsersTable, {
        fields: [commentsTable.userId],
        references: [clientUsersTable.id],
    }),

}));

// NOTE: The parentId in commentsTable is intended to reference another comment's id
// This self-referential relationship will need to be handled in the migration file
// or with manual SQL rather than in the schema definition to avoid TypeScript circular references