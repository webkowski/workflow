import { z } from "zod";
import type { ProjectInsert } from "@/types/db";

export const projectSchema = z
  .object({
    name: z.string().min(1),
    description: z.string().min(1),
    createdAt: z.string().datetime().optional(), // will be auto-set by DB
    updatedAt: z.string().datetime().optional(), // will be auto-set by DB
  })
  .strict() satisfies z.ZodType<Omit<ProjectInsert, "id">>;

export type ProjectSchema = z.infer<typeof projectSchema>;
