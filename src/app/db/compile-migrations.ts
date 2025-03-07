// Inspiration: https://github.com/drizzle-team/drizzle-orm/discussions/2532#discussioncomment-10780523
// Execute this standalone script with `db:generate-offline`

import { readMigrationFiles } from "drizzle-orm/migrator";
import path from "path";

const migrationsFolder = "./src/app/db/migrations";

const migrations = readMigrationFiles({ migrationsFolder });

await Bun.write(
  path.join(process.cwd(), `${migrationsFolder}/migrations.json`),
  JSON.stringify(migrations)
);

console.log("Migrations compiled!");