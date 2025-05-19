ALTER TABLE "organizations" ADD COLUMN "clerkId" text;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "clerkUserId" text;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "createdBy" text;--> statement-breakpoint
ALTER TABLE "organizations" DROP COLUMN "domain";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "name";