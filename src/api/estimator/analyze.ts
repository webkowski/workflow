import { Hono } from "hono";
// import { openai } from "@ai-sdk/openai";
// import { generateText } from "ai";

const app = new Hono();

app.post("/", async (c) => {
  const data = await c.req.json();

  // const { text } = await generateText({
  //   model: openai("gpt-4-turbo"),
  //   prompt: data.title,
  // });

  return c.json({
    data,
  });
});

export default app;
