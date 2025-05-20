import createRouter from "@/lib/create-router";
import * as handlers from "./users.handler";
import * as routes from "./users.routes";

const router = createRouter()
    .openapi(routes.listUsers, handlers.listUsers)
    .openapi(routes.getUserProfile, handlers.getUserProfile);

export default router; 