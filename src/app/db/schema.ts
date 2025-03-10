import {
    pgTable,
    serial,
    varchar,
    boolean,
    timestamp,
    integer,
  } from "drizzle-orm/pg-core";
  
  export const todos = pgTable("todos", {
    id: serial("id").primaryKey(),
    content: varchar("content", { length: 255 }).notNull(),
    completed: boolean("completed").default(false),
    createdAt: timestamp("created_at").defaultNow(),
  });
  
  export const citizens = pgTable("citizens", {
    id: integer("id").primaryKey(),
    age: integer("age").notNull(),
    gender: varchar("gender", { length: 255 }).notNull(),
    modeOfTransport: varchar("mode_of_transport", { length: 255 }).notNull(),
    workHours: integer("work_hours").notNull(),
    shoppingHours: integer("shopping_hours").notNull(),
    entertainmentHours: integer("entertainment_hours").notNull(),
    homeEnergyConsumption: integer("home_energy_consumption").notNull(),
    chargingStationUsage: integer("charging_station_usage").notNull(),
    carbonFootprintKgCO2: integer("carbon_footprint_kgCO2").notNull(),
    stepsWalked: integer("steps_walked").notNull(),
    caloriesBurned: integer("calories_burned").notNull(),
    sleepHours: integer("sleep_hours").notNull(),
    socialMediaHours: integer("social_media_hours").notNull(),
    publicEventsHours: integer("public_events_hours").notNull(),
  });