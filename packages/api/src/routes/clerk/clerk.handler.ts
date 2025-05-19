import type { AppRouteHandler } from "@/lib/types";
import type { HanlderRoute } from "./clerk.routes";
import { db } from "@/db";
import { organizationsTable, usersTable } from "@/db/schema";
import { createClerkClient, UserJSON } from "@clerk/backend";

const clerk = createClerkClient({
	publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
	secretKey: process.env.CLERK_SECRET_KEY!,
})

async function createUser(body: { data: UserJSON }) {

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

		const clerkOrganization = await clerk.organizations.createOrganization({
			name: "Default Organization",
			createdBy: body.data.id,
		})

		await db.insert(organizationsTable).values({
			id: Bun.randomUUIDv7(),
			name: "Default Organization",
			clerkId: clerkOrganization.id,
			createdBy: userId,
			clerkUserId: body.data.id,
		})
	} catch (error) {
		console.error(error)
	}
}

export const handler: AppRouteHandler<HanlderRoute> = async (c) => {
	const body = await c.req.json()

	switch (body.type) {
		case "user.created":
			await createUser(body)
			break;
	}

	return c.json({
		message: "ok"
	});
};