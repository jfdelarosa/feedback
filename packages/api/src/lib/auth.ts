import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { apiKey, organization } from "better-auth/plugins";
import { eq } from "drizzle-orm";
import * as handlebars from "handlebars";
import * as fs from "node:fs";
import * as path from "node:path";
import { db } from "@/db";
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";


const polarClient = new Polar({
	accessToken: process.env.POLAR_ACCESS_TOKEN,
	// Use 'sandbox' if you're using the Polar Sandbox environment
	// Remember that access tokens, products, etc. are completely separated between environments.
	// Access tokens obtained in Production are for instance not usable in the Sandbox environment.
	server: 'sandbox'
});



// Fix import issue with limax
const slug = require('limax');
import {
	account,
	apikey,
	invitation,
	member,
	organization as organizationTable,
	projectsTable,
	session as sessionTable,
	user,
	verification,
} from "@/db/schema";
import { sendEmail } from "./email";

/**
 * Reads an email template file from the templates directory
 * @param templateName - The name of the template file (e.g., 'invite.html', 'welcome.html')
 * @returns The contents of the template file
 * @throws Error if the template file cannot be read
 */
function getEmailTemplate(templateName: string): string {
	try {
		return fs.readFileSync(
			path.join(__dirname, "templates", templateName),
			"utf-8",
		);
	}
	catch (error) {
		console.error(`Error reading template ${templateName}:`, error);
		throw new Error(`Failed to read email template: ${templateName}`);
	}
}

export const auth = betterAuth({
	basePath: "/auth",
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			account,
			apikey,
			invitation,
			member,
			organization: organizationTable,
			session: sessionTable,
			user,
			verification,
		},
	}),
	databaseHooks: {
		user: {
			create: {
				after: async (user) => {
					try {

						console.log(user)

						const organizationId = Bun.randomUUIDv7();

						// 5 characters
						const randomId = organizationId.slice(0, 5);

						await db.insert(organizationTable).values({
							createdAt: new Date(),
							id: organizationId,
							logo: "",
							metadata: JSON.stringify({}),
							name: "Default Organization",
							slug: slug("Default Organization " + randomId),
						});

						await db.insert(member).values({
							createdAt: new Date(),
							id: Bun.randomUUIDv7(),
							organizationId,
							role: "admin",
							userId: user.id,
						});

						await db.insert(projectsTable).values({
							id: Bun.randomUUIDv7(),
							name: "Default Project",
							createdBy: user.id,
							organizationId,
						});

					} catch (error) {
						console.error("Error creating default project", error);
					}
				},
			},
		},
		session: {
			create: {
				before: async (session) => {
					let activeProjectId = null;

					console.log(session)

					const firstProject = await db
						.select({
							id: projectsTable.id,
						})
						.from(projectsTable)
						.where(eq(projectsTable.createdBy, session.userId))
						.limit(1);

					// If the organization has at least one project, set the activeProjectId to the first project
					if (firstProject.length === 1) {
						activeProjectId = firstProject[0].id;
					}

					return {
						data: {
							...session,
							activeProjectId,
						},
					};
				},
			},
		},
	},
	emailAndPassword: {
		enabled: true,
		minPasswordLength: 6,
	},
	emailVerification: {
		sendVerificationEmail: async ({ token, url, user }) => {
			const template_html = getEmailTemplate("welcome.html");
			const template = handlebars.compile(template_html);
			const html = template({
				email: user.email,
				name: user.name,
				token,
				url,
			});
			await sendEmail(user.email, "Verify your email address", html);
		},
	},
	plugins: [
		apiKey({
			enableMetadata: true,
			rateLimit: {
				enabled: false,
			},
		}),
		organization({
			async sendInvitationEmail(data) {
				try {
					// Get the invite template
					const template_html = getEmailTemplate("invite.html");

					// Prepare the template data
					const templateData = {
						email: data.email,
						invitedByEmail: data.inviter.user.email,
						invitedByUsername: data.inviter.user.name || "Team Member",
						inviteLink: `${process.env.ORIGIN_URL}/accept-invitation/${data.id}`,
						teamName: data.organization.name,
					};

					console.log("Rendering template with data:", templateData);

					// Compile and render the template
					const template = handlebars.compile(template_html);
					const html = template(templateData);

					if (!html || html.trim().length === 0) {
						throw new Error("Rendered HTML is empty");
					}

					await sendEmail(
						data.email,
						`Invitation to join ${data.organization.name}`,
						html,
					);
				}
				catch (error) {
					console.error("Error sending invitation email:", error);
					throw error;
				}
			},
		}),
		polar({
			client: polarClient,
			createCustomerOnSignUp: true,
			use: [
				checkout({
					products: [
						{
							productId: "fa6e9589-808e-4108-9776-feeaa777ac1a",
							slug: "pro"
						},
						{
							productId: "ffba188c-34c5-41a2-ada0-159891144a1d",
							slug: "scale"
						}
					],
					successUrl: "/success?checkout_id={CHECKOUT_ID}",
					authenticatedUsersOnly: true
				}),
				portal(),
				usage(),
				webhooks({
					secret: process.env.POLAR_WEBHOOK_SECRET!,
				})
			],
		})
	],
	session: {
		additionalFields: {
			activeProjectId: {
				type: "string",
			},
		},
	},
	trustedOrigins: [process.env.ORIGIN_URL!],
});
