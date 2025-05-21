import type { AppRouteHandler } from "@/lib/types";
import type { HanlderRoute } from "./clerk.routes";
import type { ClerkClient } from "@clerk/backend";
import { db } from "@/db";
import { organizationsTable, usersTable, projectsTable } from "@/db/schema";
import { UserJSON } from "@clerk/backend";

async function createUser(body: { data: UserJSON }, clerkClient: ClerkClient) {

	try {
		let email = null

		if (body.data.email_addresses.length > 0) {
			email = body.data.email_addresses[0].email_address
		}

		const userId = Bun.randomUUIDv7()

		const user = await db.insert(usersTable).values({
			id: userId,
			email: email,
			clerkId: body.data.id,
			firstName: body.data.first_name,
			lastName: body.data.last_name,
			imageUrl: body.data.image_url,
		})

		const clerkOrganization = await clerkClient.organizations.createOrganization({
			name: "Default Organization",
			createdBy: body.data.id,
		})

		const organizationId = Bun.randomUUIDv7()

		await db.insert(organizationsTable).values({
			id: organizationId,
			name: "Default Organization",
			clerkId: clerkOrganization.id,
			createdBy: userId,
			clerkUserId: body.data.id,
		})

		// Create a default project for the organization
		await db.insert(projectsTable).values({
			id: Bun.randomUUIDv7(),
			name: "Default Project",
			description: "My first project",
			organizationId: organizationId,
			createdBy: userId,
			isDefault: true,
		})
	} catch (error) {
		console.error(error)
	}
}

export const handler: AppRouteHandler<HanlderRoute> = async (c) => {
	const clerkClient = c.get('clerk')
	const body = await c.req.json()

	switch (body.type) {
		case "user.created":
			await createUser(body, clerkClient)
			break;
	}

	return c.json({
		message: "ok"
	});
};