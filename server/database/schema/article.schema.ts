import * as db from "drizzle-orm/sqlite-core";
import { categories } from "./category.schema";
import { relations } from "drizzle-orm";

export const articles = db.sqliteTable(
  "articles",
  {
    id: db
      .integer("id", { mode: "number" })
      .primaryKey({ autoIncrement: true }),
    title: db.text("title", { mode: "text", length: 150 }),
    slug: db.text("slug", { mode: "text", length: 150 }).notNull(),
    content: db.text("content"),
    coverImage: db.text("cover_image"),

    status: db
      .text("status", { enum: ["draft", "published"] })
      .notNull()
      .default("draft"),
    publishedAt: db.integer("published_at", { mode: "timestamp" }),
    updatedAt: db.integer("updated_at", { mode: "timestamp" }),
    tags: db.text(),

    metaDescription: db.text("meta_description"),
    metaKeywords: db.text("meta_key"),

    categoryId: db
      .integer("category_id")
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
