import { createAuthClient } from "better-auth/client";
import { apiKeyClient, inferAdditionalFields, organizationClient } from "better-auth/client/plugins";

export const auth = createAuthClient({
	plugins: [
		apiKeyClient(),
		organizationClient(),
		inferAdditionalFields({
			session: {
				activeProjectId: {
					type: "string",
				},
			},
		}),
	],
});
