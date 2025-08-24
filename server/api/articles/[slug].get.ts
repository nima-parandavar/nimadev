import { drizzle } from "drizzle-orm/better-sqlite3";
import { articles } from "~/server/database/schema/article.schema";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") as string;
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { articles },
  });

  try {
    const data = await db.query.articles.findFirst({
      where: (articles, { eq }) => eq(articles.slug, slug),
      columns: {
        publishedAt: false,
        updatedAt: false,
      },
    });

    if (!data) {
      return sendErrorMessage(404, "Article not found");
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
