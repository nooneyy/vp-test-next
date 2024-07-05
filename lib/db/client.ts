import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "@/lib/db/schema";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_KEY,
});
export const db = drizzle(client, { schema });
