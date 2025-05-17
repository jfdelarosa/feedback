import { OpenAPIHono } from "@hono/zod-openapi";
import { defaultHook } from "stoker/openapi";
import type { AppEnv } from "./types.ts";

export default function createRouter() {
	return new OpenAPIHono<AppEnv>({
		defaultHook,
		strict: false,
	});
}
