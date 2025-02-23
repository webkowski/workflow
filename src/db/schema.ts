import { pgTable, timestamp, text, serial } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial().primaryKey().notNull(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const prompts = pgTable("prompts", {
  id: serial().primaryKey().notNull(),
  name: text().notNull(),
  prompt: text(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});
