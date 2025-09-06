import * as db from "drizzle-orm/sqlite-core";

export const users = db.sqliteTable(
  "users",
  {
    id: db
      .integer("id", { mode: "number" })
      .primaryKey({ autoIncrement: true }),
    firstName: db.text("first_name", { length: 50 }),
    lastName: db.text("last_name", { length: 100 }),
    email: db.text("email").unique(),
    password: db.text("password").notNull(),
    isActive: db.int("is_active", { mode: "boolean" }),
    role: db.text("role", { enum: ["user", "admin"] }).default("user"),
  },
  (table) => [db.uniqueIndex("email_idx").on(table.email)]
);
