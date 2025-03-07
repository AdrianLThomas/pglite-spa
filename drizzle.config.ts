import type { Config } from "drizzle-kit";

export default {
  schema: "./src/app/db/schema.ts",
  out: "./src/app/db/migrations",
  dialect: "postgresql",
  driver: "pglite",
//   dbCredentials: {
//     url: process.env.DATABASE_URL_EXTERNAL!,
//   },
} satisfies Config;
