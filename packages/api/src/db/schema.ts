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

export const account = pgTable("account", {
    accessToken: text("access_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    accountId: text("account_id").notNull(),
    createdAt: timestamp("created_at").notNull(),
    id: text("id").primaryKey(),
    idToken: text("id_token"),
    password: text("password"),
    providerId: text("provider_id").notNull(),
    refreshToken: text("refresh_token"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    updatedAt: timestamp("updated_at").notNull(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const apikey = pgTable("apikey", {
    createdAt: timestamp("created_at").notNull(),
    enabled: boolean("enabled"),
    expiresAt: timestamp("expires_at"),
    id: text("id").primaryKey(),
    key: text("key").notNull(),
    lastRefillAt: timestamp("last_refill_at"),
    lastRequest: timestamp("last_request"),
    metadata: jsonb("metadata"),
    name: text("name"),
    permissions: text("permissions"),
    prefix: text("prefix"),
    rateLimitEnabled: boolean("rate_limit_enabled"),
    rateLimitMax: integer("rate_limit_max"),
    rateLimitTimeWindow: integer("rate_limit_time_window"),
    refillAmount: integer("refill_amount"),
    refillInterval: integer("refill_interval"),
    remaining: integer("remaining"),
    requestCount: integer("request_count"),
    start: text("start"),
    updatedAt: timestamp("updated_at").notNull(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
});


export const organization = pgTable("organization", {
    createdAt: timestamp("created_at").notNull(),
    id: text("id").primaryKey(),
    logo: text("logo"),
    metadata: text("metadata"),
    name: text("name").notNull(),
    slug: text("slug").unique(),
});

export const member = pgTable("member", {
    createdAt: timestamp("created_at").notNull(),
    id: text("id").primaryKey(),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    role: text("role").notNull(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const invitation = pgTable("invitation", {
    email: text("email").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    id: text("id").primaryKey(),
    inviterId: text("inviter_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    role: text("role"),
    status: text("status").notNull(),
});


export const user = pgTable("user", {
    createdAt: timestamp("created_at").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").notNull(),
    id: text("id").primaryKey(),
    image: text("image"),
    name: text("name").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
    activeOrganizationId: text("active_organization_id"),
    activeProjectId: text("active_project_id"),
    createdAt: timestamp("created_at").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    id: text("id").primaryKey(),
    ipAddress: text("ip_address"),
    token: text("token").notNull().unique(),
    updatedAt: timestamp("updated_at").notNull(),
    userAgent: text("user_agent"),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const verification = pgTable("verification", {
    createdAt: timestamp("created_at"),
    expiresAt: timestamp("expires_at").notNull(),
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    updatedAt: timestamp("updated_at"),
    value: text("value").notNull(),
});

// Projects table
export const projectsTable = pgTable("projects", {
    id: text().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    organizationId: text().notNull().references(() => organization.id, { onDelete: "cascade" }),
    createdBy: text().notNull().references(() => user.id),
    isDefault: boolean().default(true).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    theme: varchar({ length: 255 }).default("light").notNull(),
    metadata: jsonb(),
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

// User-Client Identity Mapping table
export const userClientIdentitiesTable = pgTable("user_client_identities", {
    id: text().primaryKey(),
    platformUserId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
    clientUserId: text().notNull().references(() => clientUsersTable.id, { onDelete: "cascade" }),
    projectId: text().notNull().references(() => projectsTable.id, { onDelete: "cascade" }),
    verifiedAt: timestamp(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Comments table
export const commentsTable = pgTable("comments", {
    id: uuid().defaultRandom().primaryKey(),
    content: text().notNull(),
    feedbackId: text().notNull().references(() => feedbackTable.id, { onDelete: "cascade" }),

    // WHO is actually making the comment (if logged into platform)
    authorPlatformUserId: text().references(() => user.id), // nullable for pure client comments

    // WHICH identity they're representing
    representingClientUserId: text().references(() => clientUsersTable.id), // nullable for official-only comments

    // For nested comments/replies - nullable parentId for top-level comments
    parentId: uuid(), // Will be used to reference another comment
    isOfficialResponse: boolean().default(false).notNull(), // To mark official team responses

    // Status update fields
    isStatusUpdate: boolean().default(false),
    statusFrom: varchar({ length: 50 }),
    statusTo: varchar({ length: 50 }),

    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Comment votes table
export const commentVotesTable = pgTable("comment_votes", {
    id: uuid().defaultRandom().primaryKey(),
    commentId: uuid().notNull().references(() => commentsTable.id, { onDelete: "cascade" }),

    // Support voting by either platform users or client users
    platformUserId: text().references(() => user.id), // nullable
    clientUserId: text().references(() => clientUsersTable.id), // nullable

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
    categories: many(feedbackCategoriesTable),
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

// User-Client Identity Relations
export const userClientIdentitiesRelation = relations(userClientIdentitiesTable, ({ one }) => ({
    platformUser: one(user, {
        fields: [userClientIdentitiesTable.platformUserId],
        references: [user.id],
    }),
    clientUser: one(clientUsersTable, {
        fields: [userClientIdentitiesTable.clientUserId],
        references: [clientUsersTable.id],
    }),
    project: one(projectsTable, {
        fields: [userClientIdentitiesTable.projectId],
        references: [projectsTable.id],
    }),
}));

export const feedbackCommentsRelation = relations(commentsTable, ({ one, many }) => ({
    feedback: one(feedbackTable, {
        fields: [commentsTable.feedbackId],
        references: [feedbackTable.id],
    }),
    authorPlatformUser: one(user, {
        fields: [commentsTable.authorPlatformUserId],
        references: [user.id],
    }),
    representingClientUser: one(clientUsersTable, {
        fields: [commentsTable.representingClientUserId],
        references: [clientUsersTable.id],
    }),
}));

// Comment votes relations
export const commentVotesRelation = relations(commentVotesTable, ({ one }) => ({
    comment: one(commentsTable, {
        fields: [commentVotesTable.commentId],
        references: [commentsTable.id],
    }),
    platformUser: one(user, {
        fields: [commentVotesTable.platformUserId],
        references: [user.id],
    }),
    clientUser: one(clientUsersTable, {
        fields: [commentVotesTable.clientUserId],
        references: [clientUsersTable.id],
    }),
}));

// Add relations for users to their client identities
export const userRelations = relations(user, ({ many }) => ({
    clientIdentities: many(userClientIdentitiesTable),
    authoredComments: many(commentsTable),
    commentVotes: many(commentVotesTable),
}));

// Add relations for client users to their platform identities
export const clientUserRelations = relations(clientUsersTable, ({ many }) => ({
    platformIdentities: many(userClientIdentitiesTable),
    representedComments: many(commentsTable),
    feedback: many(feedbackTable),
    votes: many(feedbackVotesTable),
    commentVotes: many(commentVotesTable),
}));

// NOTE: The parentId in commentsTable is intended to reference another comment's id
// This self-referential relationship will need to be handled in the migration file
// or with manual SQL rather than in the schema definition to avoid TypeScript circular references

// Categories table
export const categoriesTable = pgTable("categories", {
    id: text().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    color: varchar({ length: 50 }),
    icon: varchar({ length: 100 }),
    projectId: text().notNull().references(() => projectsTable.id, { onDelete: "cascade" }),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
});

// Feedback-Categories mapping table (many-to-many)
export const feedbackCategoriesTable = pgTable("feedback_categories", {
    id: uuid().defaultRandom().primaryKey(),
    feedbackId: text().notNull().references(() => feedbackTable.id, { onDelete: "cascade" }),
    categoryId: text().notNull().references(() => categoriesTable.id, { onDelete: "cascade" }),
    createdAt: timestamp().notNull().defaultNow(),
});

// Category relations
export const categoryRelations = relations(categoriesTable, ({ one, many }) => ({
    project: one(projectsTable, {
        fields: [categoriesTable.projectId],
        references: [projectsTable.id],
    }),
    feedbackItems: many(feedbackCategoriesTable),
}));

// Feedback categories mapping relations
export const feedbackCategoriesRelations = relations(feedbackCategoriesTable, ({ one }) => ({
    feedback: one(feedbackTable, {
        fields: [feedbackCategoriesTable.feedbackId],
        references: [feedbackTable.id],
    }),
    category: one(categoriesTable, {
        fields: [feedbackCategoriesTable.categoryId],
        references: [categoriesTable.id],
    }),
}));

// Add categories relation to projects
export const projectRelations = relations(projectsTable, ({ many }) => ({
    categories: many(categoriesTable),
}));

// Categories relation already included in feedbackVotesRelation
// export const feedbackRelations = relations(feedbackTable, ({ many }) => ({
//     categories: many(feedbackCategoriesTable),
// }));