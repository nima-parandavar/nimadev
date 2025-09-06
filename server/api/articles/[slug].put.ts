import { tables } from "~/server/utils/drizzle.ts";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const slug = getRouterParam(event, "slug") as string;
  const db = useDrizzle();

  try {
    const article = await db.query.articles.findFirst({
      where: (articles, { eq }) => eq(articles.slug, slug),
    });

    if (!article) {
      throw sendErrorMessage(404, "Category not found");
    }

    return await db
      .update(tables.articles)
      .set(body)
      .where(eq(tables.articles.slug, slug));
  } catch (error) {
    console.error(error);
    return error;
  }
});
