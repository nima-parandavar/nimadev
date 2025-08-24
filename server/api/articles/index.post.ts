import { drizzle } from "drizzle-orm/better-sqlite3";
import { articles } from "~/server/database/schema/article.schema";

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event);

  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { articles },
  });

  try {
    const article = await db
      .insert(articles)
      .values({ ...body, publishedAt: new Date() });
    return article;
  } catch (error) {
    console.error(error);
    return error;
  }
});
