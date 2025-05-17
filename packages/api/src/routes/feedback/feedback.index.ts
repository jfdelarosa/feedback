import createRouter from "@/lib/create-router";
import * as handlers from "./feedback.handler";
import * as routes from "./feedback.routes";

const router = createRouter()
	.openapi(routes.list, handlers.list)
	.openapi(routes.create, handlers.create)
	.openapi(routes.getOne, handlers.getOne);

export default router;
