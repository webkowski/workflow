import { type DrizzleConfig } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { z } from "zod";
import * as schema from "./schema";

const DATABASE_URL = z
  .string({
    description: "The URL of the database",
  })
  .url()
  .parse(process.env.DATABASE_URL!);

const config = {
  casing: "snake_case",
  schema,
} satisfies DrizzleConfig<typeof schema>;

export const db = drizzle({
  client: postgres(DATABASE_URL, { prepare: false }),
  ...config,
});
