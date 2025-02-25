import { handle } from "hono/vercel";
import { Hono } from "hono";
import analyze from "@/api/estimator/analyze";
import project from "@/api/project";

const router = new Hono().basePath("/api");

router.route("/estimator/analyze", analyze);
router.route("/project/add", project.add);

export const maxDuration = 30;

export const GET = handle(router);
export const POST = handle(router);
export const PATCH = handle(router);
export const DELETE = handle(router);
export const OPTIONS = handle(router);
