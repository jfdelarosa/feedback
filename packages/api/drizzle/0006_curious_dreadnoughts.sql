ALTER TABLE "feedback" DROP CONSTRAINT "feedback_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_userId_client_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."client_users"("id") ON DELETE no action ON UPDATE no action;