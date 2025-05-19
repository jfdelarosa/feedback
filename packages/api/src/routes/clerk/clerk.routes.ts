import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const tags = ["Clerk"];



export const handler = createRoute({
	method: "post",
	path: "/clerk",
	responses: {
		[HttpStatusCodes.OK]: jsonContent(
			createMessageObjectSchema("ok"),
			"ok"
		)
	},
	tags,
});


export type HanlderRoute = typeof handler;
