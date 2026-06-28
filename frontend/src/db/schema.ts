import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Waitlist signups collected from the landing page.
 * `email` is unique so duplicates are rejected at the database level too.
 */
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("website"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Waitlist = typeof waitlist.$inferSelect;
export type NewWaitlist = typeof waitlist.$inferInsert;
