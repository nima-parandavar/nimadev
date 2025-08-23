import * as db from "drizzle-orm/sqlite-core";

export const users = db.sqliteTable(
  "users",
  {
    id: db.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    firstName: db.text({ length: 50 }),
    lastName: db.text({ length: 100 }),
    email: db.text().unique(),
    password: db.text().notNull(),
    isActive: db.int({ mode: "boolean" }),
    role: db.text({ enum: ["user", "admin"] }),
  },
  (table) => [db.uniqueIndex("email_idx").on(table.email)]
);
