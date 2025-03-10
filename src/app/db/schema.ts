import {
    pgTable,
    serial,
    varchar,
    boolean,
    timestamp,
    integer,
    decimal,
  } from "drizzle-orm/pg-core";
  
  export const todos = pgTable("todos", {
    id: serial("id").primaryKey(),
    content: varchar("content", { length: 255 }).notNull(),
    completed: boolean("completed").default(false),
    createdAt: timestamp("created_at").defaultNow(),
  });
  
  export const citizens = pgTable("citizens", {
    id: integer("id").primaryKey(), // Primary key (Citizen_ID)
    age: integer("age").notNull(), // Age is an integer
    gender: varchar("gender", { length: 255 }).notNull(), // Gender is a string
    modeOfTransport: varchar("mode_of_transport", { length: 255 }).notNull(), // Mode of transport is a string
    workHours: integer("work_hours").notNull(), // Work hours is an integer
    shoppingHours: integer("shopping_hours").notNull(), // Shopping hours is an integer
    entertainmentHours: integer("entertainment_hours").notNull(), // Entertainment hours is an integer
    homeEnergyConsumption: decimal("home_energy_consumption").notNull(), // Home energy consumption is a float
    chargingStationUsage: integer("charging_station_usage").notNull(), // Charging station usage is an integer
    carbonFootprintKgCO2: decimal("carbon_footprint_kgco2").notNull(), // Carbon footprint is a float
    stepsWalked: integer("steps_walked").notNull(), // Steps walked is an integer
    caloriesBurned: integer("calories_burned").notNull(), // Calories burned is an integer
    sleepHours: decimal("sleep_hours").notNull(), // Sleep hours is a float
    socialMediaHours: decimal("social_media_hours").notNull(), // Social media hours is a float
    publicEventsHours: decimal("public_events_hours").notNull(), // Public events hours is a float
  });
  
  