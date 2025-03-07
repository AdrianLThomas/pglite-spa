import { drizzle } from "drizzle-orm/pglite";
import { PGlite } from "@electric-sql/pglite";

export const client = new PGlite("idb://my-pgdata");
export const db = drizzle({ client });