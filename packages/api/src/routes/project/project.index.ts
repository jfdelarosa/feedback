import createRouter from "@/lib/create-router";
import * as handlers from "./project.handler";
import * as routes from "./project.routes";

const router = createRouter()
	.openapi(routes.getDefaultProject, handlers.getDefaultProject)
	.openapi(routes.updateProject, handlers.updateProject);

export default router;
