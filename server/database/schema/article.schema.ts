import * as db from "drizzle-orm/sqlite-core";
import { categories } from "./category.schema";
import { relations } from "drizzle-orm";

export const articles = db.sqliteTable(
  "articles",
  {
    id: db.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    title: db.text({ mode: "text", length: 150 }),
    slug: db.text({ mode: "text", length: 150 }).notNull(),
    content: db.text(),
    coverImage: db.text(),

    status: db
      .text({ enum: ["draft", "published"] })
      .notNull()
      .default("draft"),
    publishedAt: db.integer({ mode: "timestamp" }),
    updatedAt: db.integer({ mode: "timestamp" }),
    tags: db.text(),

    metaDescription: db.text(),
    metaKeywords: db.text(),

    categoryId: db
      .integer()
      .references(() => categories.id, { onDelete: "set null" }),
  },
  (table) => [db.uniqueIndex("article_slug_idx").on(table.slug)]
);

export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
}));

export const articlesRelations = relations(articles, ({ one }) => ({
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
}));
