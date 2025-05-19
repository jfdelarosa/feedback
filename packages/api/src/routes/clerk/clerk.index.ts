import createRouter from "@/lib/create-router";
import * as handlers from "./clerk.handler";
import * as routes from "./clerk.routes";

const router = createRouter()
	.openapi(routes.handler, handlers.handler)

export default router;
