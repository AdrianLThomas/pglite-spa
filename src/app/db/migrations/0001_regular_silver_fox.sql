CREATE TABLE "citizens" (
	"id" integer PRIMARY KEY NOT NULL,
	"age" integer NOT NULL,
	"gender" varchar(255) NOT NULL,
	"mode_of_transport" varchar(255) NOT NULL,
	"work_hours" integer NOT NULL,
	"shopping_hours" integer NOT NULL,
	"entertainment_hours" integer NOT NULL,
	"home_energy_consumption" integer NOT NULL,
	"charging_station_usage" integer NOT NULL,
	"carbon_footprint_kgCO2" integer NOT NULL,
	"steps_walked" integer NOT NULL,
	"calories_burned" integer NOT NULL,
	"sleep_hours" integer NOT NULL,
	"social_media_hours" integer NOT NULL,
	"public_events_hours" integer NOT NULL
);
