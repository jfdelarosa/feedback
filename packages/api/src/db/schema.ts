import {
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const feedbackTable = pgTable("feedback", {
    id: text().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});