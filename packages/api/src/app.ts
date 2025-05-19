import createApp from "@/lib/create-app";
import { registerRoutes } from "@/routes";

console.log("Starting server...");

const app = registerRoutes(createApp());

export default {
	fetch: app.fetch,
	port: 3002,
};
