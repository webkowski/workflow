import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const data = await c.req.json();

  return c.json(data);
});

export default app;
