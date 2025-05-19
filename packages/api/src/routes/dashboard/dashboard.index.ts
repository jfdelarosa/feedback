import createRouter from "@/lib/create-router";
import * as handlers from "./dashboard.handler";
import * as routes from "./dashboard.routes";

const router = createRouter()
    .openapi(routes.recentFeedback, handlers.recentFeedback)
    .openapi(routes.topVotedFeedback, handlers.topVotedFeedback);

export default router; 