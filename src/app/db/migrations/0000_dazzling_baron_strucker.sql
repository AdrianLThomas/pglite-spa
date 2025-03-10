CREATE TABLE "citizens" (
	"id" integer PRIMARY KEY NOT NULL,
	"age" integer NOT NULL,
	"gender" varchar(255) NOT NULL,
	"mode_of_transport" varchar(255) NOT NULL,
	"work_hours" integer NOT NULL,
	"shopping_hours" integer NOT NULL,
	"entertainment_hours" integer NOT NULL,
	"home_energy_consumption" numeric NOT NULL,
	"charging_station_usage" integer NOT NULL,
	"carbon_footprint_kgco2" numeric NOT NULL,
	"steps_walked" integer NOT NULL,
	"calories_burned" integer NOT NULL,
	"sleep_hours" numeric NOT NULL,
	"social_media_hours" numeric NOT NULL,
	"public_events_hours" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" varchar(255) NOT NULL,
	"completed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
