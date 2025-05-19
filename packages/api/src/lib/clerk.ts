import { createClerkClient } from "@clerk/backend";

export const clerk = createClerkClient({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_SECRET_KEY!,
})
