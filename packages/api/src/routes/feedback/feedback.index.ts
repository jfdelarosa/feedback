import createRouter from "@/lib/create-router";
import * as handlers from "./feedback.handler";
import * as routes from "./feedback.routes";

const router = createRouter()
	.openapi(routes.list, handlers.list)
	.openapi(routes.getOne, handlers.getOne)
	.openapi(routes.updateStatus, handlers.updateStatus)
	.openapi(routes.getComments, handlers.getComments)
	.openapi(routes.addComment, handlers.addComment);

export default router;
