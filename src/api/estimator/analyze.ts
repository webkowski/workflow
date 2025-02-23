import { Hono } from "hono";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const app = new Hono();
app.post("/", async (c) => {
  const { prompt }: { prompt: string } = await c.req.json();

  // @todo refactor to utils
  const taskAnalyzePrompt = await db.query.prompts.findFirst({
    where: (prompts) => eq(prompts.name, "TASK_ANALYZE"),
  });

  if (!taskAnalyzePrompt) {
    return c.text("Task analyze prompt not found", 404);
  }

  const result = streamText({
    model: openai("gpt-4o"),
    system: taskAnalyzePrompt?.prompt || "",
    prompt,
  });

  return result.toDataStreamResponse();
});

export default app;
