export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") as string;
  const db = useDrizzle();

  try {
    const data = await db.query.articles.findFirst({
      where: (articles, { eq }) => eq(articles.slug, slug),
      columns: {
        publishedAt: false,
        updatedAt: false,
      },
    });

    if (!data) {
      throw sendErrorMessage(404, "Article not found");
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
