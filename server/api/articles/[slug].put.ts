import { drizzle } from "drizzle-orm/better-sqlite3";
import { articles } from "~/server/database/schema/article.schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const slug = getRouterParam(event, "slug") as string;
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { articles },
  });

  try {
    const article = await db.query.articles.findFirst({
      where: (articles, { eq }) => eq(articles.slug, slug),
    });

    if (!article) {
      return sendErrorMessage(404, "Category not found");
    }

    return await db.update(articles).set(body).where(eq(articles.slug, slug));
  } catch (error) {
    console.error(error);
    return error;
  }
});
