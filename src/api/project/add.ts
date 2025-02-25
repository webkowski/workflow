import { Hono } from "hono";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { projectSchema } from "@/schemas/project";
import type { Project } from "@/types/db";
import { handleError } from "@/utils/error";
import { validateBody } from "@/utils/validate";

const app = new Hono();
app.post("/", async (c) => {
  try {
    const data = await validateBody(projectSchema)(c);
    const [project] = (await db.insert(projects).values(data).returning()) as Project[];
    return c.json(project);
  } catch (error) {
    return handleError(c, error);
  }
});

export default app;
