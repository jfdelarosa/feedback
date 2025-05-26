import createRouter from "@/lib/create-router";
import * as handlers from "./projects.handler";
import * as routes from "./projects.routes";

const router = createRouter()
	.openapi(routes.list, handlers.list)
	.openapi(routes.create, handlers.create)
	.openapi(routes.getOne, handlers.getOne)

export default router;
