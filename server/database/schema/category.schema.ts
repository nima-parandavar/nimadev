import * as db from "drizzle-orm/sqlite-core";

export const categories = db.sqliteTable(
  "categories",
  {
    id: db.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: db.text({ length: 50 }).notNull().unique(),
  },
  (table) => [db.uniqueIndex("name_idx").on(table.name)]
);
