import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./server/database/schema",
  out: "./server/database/migrations",
  casing: "camelCase",
  dbCredentials: {
    url: "./server/database/db.sqlite3",
  },
});
