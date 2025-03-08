import type { MigrationConfig } from "drizzle-orm/migrator";
import { db } from "./drizzle";
import migrations from "./migrations/migrations.json";

export async function migrate() {
  // dialect and session will appear to not exist...but they do
  // @ts-ignore
  await db.dialect.migrate(migrations, db.session, {
    migrationsTable: "drizzle_migrations",
  } satisfies Omit<MigrationConfig, "migrationsFolder">);
}