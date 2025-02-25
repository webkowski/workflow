import { type projects, type prompts } from "@/db/schema";

export type Project = typeof projects.$inferSelect;
export type ProjectInsert = typeof projects.$inferInsert;

export type Prompt = typeof prompts.$inferSelect;
export type PromptInsert = typeof prompts.$inferInsert;
