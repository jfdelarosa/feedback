ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_client_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."client_users"("id") ON DELETE no action ON UPDATE no action;