import * as db from "drizzle-orm/sqlite-core";

export const categories = db.sqliteTable(
  "categories",
  {
    id: db
      .integer("id", { mode: "number" })
      .primaryKey({ autoIncrement: true }),
    name: db.text("name", { length: 50 }).notNull().unique(),
  },
  (table) => [db.uniqueIndex("name_idx").on(table.name)]
);
