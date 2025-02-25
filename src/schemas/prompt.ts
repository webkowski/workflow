import { z } from "zod";
import type { PromptInsert } from "@/types/db";

export const promptSchema = z
  .object({
    name: z.string().min(1),
    prompt: z.string().optional(),
    createdAt: z.string().datetime().optional(),
    updatedAt: z.string().datetime().optional(),
  })
  .strict() satisfies z.ZodType<Omit<PromptInsert, "id">>;

export type PromptSchema = z.infer<typeof promptSchema>;
