import type { Config } from "drizzle-kit";

export default {
  schema: "./src/app/db/schema.ts",
  out: "./src/app/db/migrations",
  dialect: "postgresql",
  driver: "pglite",
} satisfies Config;
