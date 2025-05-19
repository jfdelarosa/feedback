ALTER TABLE "users" RENAME COLUMN "externalId" TO "clerkId";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "organizationId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "firstName" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lastName" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "imageUrl" varchar(255);