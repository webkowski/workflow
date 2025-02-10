import { handle } from "hono/vercel";
import { Hono } from "hono";
import analyze from "@/api/estimator/analyze";

const router = new Hono().basePath("/api");

router.route("/estimator/analyze", analyze);

export const GET = handle(router);
export const POST = handle(router);
export const PATCH = handle(router);
export const DELETE = handle(router);
export const OPTIONS = handle(router);
