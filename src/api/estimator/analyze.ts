import { Hono } from "hono";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { TASK_ESTIMATE } from "@/prompts";

const app = new Hono();
app.post("/", async (c) => {
  const { prompt }: { prompt: string } = await c.req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    system: TASK_ESTIMATE,
    prompt,
  });

  return result.toDataStreamResponse();
});

export default app;
