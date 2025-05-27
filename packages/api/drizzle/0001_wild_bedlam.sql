ALTER TABLE "comments" ADD COLUMN "isStatusUpdate" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "statusFrom" varchar(50);--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "statusTo" varchar(50);