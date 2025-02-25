import { type Context } from "hono";
import { type z } from "zod";
import { AppError } from "./error";

export const validateBody = <T extends z.ZodType>(schema: T) => {
  return async (c: Context) => {
    let body;
    try {
      body = await c.req.json();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Invalid JSON in request body";
      throw new AppError(message, 400);
    }

    const result = schema.safeParse(body);
    if (!result.success) {
      throw new AppError("Validation failed", 400);
    }

    return result.data as z.infer<T>;
  };
};
