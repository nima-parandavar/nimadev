import { drizzle } from "drizzle-orm/better-sqlite3";
import { articles } from "~/server/database/schema/article.schema";

export default defineEventHandler(async (event) => {
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { articles },
  });

  try {
    const data = await db.query.articles.findMany({
      orderBy: (articles, { asc }) => [asc(articles.publishedAt)],
    });
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
