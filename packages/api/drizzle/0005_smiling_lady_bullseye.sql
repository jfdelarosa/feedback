ALTER TABLE "feedback" RENAME COLUMN "description" TO "content";--> statement-breakpoint
ALTER TABLE "feedback" DROP CONSTRAINT "feedback_organizationId_organizations_id_fk";
--> statement-breakpoint
ALTER TABLE "feedback" DROP COLUMN "organizationId";