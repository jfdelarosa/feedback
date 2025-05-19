ALTER TABLE "feedback_votes" DROP CONSTRAINT "feedback_votes_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "feedback_votes" ADD COLUMN "value" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "feedback_votes" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "feedback_votes" ADD CONSTRAINT "feedback_votes_userId_client_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."client_users"("id") ON DELETE no action ON UPDATE no action;