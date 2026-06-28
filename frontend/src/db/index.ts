import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

let db: Db | undefined;

/**
 * Lazily create the Drizzle client so the app can build without a database
 * connection string present (it's only needed at request time).
 */
export function getDb(): Db {
  if (!db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        "DATABASE_URL is not set. Add your Neon connection string to .env.local.",
      );
    }
    db = drizzle(neon(url), { schema });
  }
  return db;
}
