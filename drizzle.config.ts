import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_KEY,
  },
  schema: "./lib/db/schema.ts",
});
