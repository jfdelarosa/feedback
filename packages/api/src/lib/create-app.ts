import { notFound, onError } from "stoker/middlewares";
import createRouter from "./create-router";

export default function createApp() {
	const app = createRouter();

	app
		.notFound(notFound)
		.onError(onError);

	return app;
}
