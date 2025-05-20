import createApp from "@/lib/create-app";
import { registerRoutes } from "@/routes";

const app = registerRoutes(createApp());

export default {
	fetch: app.fetch,
	port: 3002,
};
