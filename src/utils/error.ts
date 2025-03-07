import { type Context } from "hono";
import { ZodError } from "zod";
import { type ContentfulStatusCode } from "hono/utils/http-status";

export class AppError extends Error {
  public statusCode: number;
  public details?: unknown;

  constructor(message: string, statusCode = 400, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const handleError = (c: Context, error: unknown) => {
  if (error instanceof AppError) {
    return c.json(
      {
        error: {
          message: error.message,
          code: error.statusCode,
          ...(error.details ? { details: error.details } : {}),
        },
      },
      error.statusCode as ContentfulStatusCode,
    );
  }

  if (error instanceof ZodError) {
    return c.json(
      {
        error: {
          message: "Validation error",
          details: error.issues,
          code: 400,
        },
      },
      400,
    );
  }

  return c.json(
    {
      error: {
        message: "Internal server error",
        code: 500,
      },
    },
    500,
  );
};
