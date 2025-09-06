export default defineEventHandler(async (event) => {
  const db = useDrizzle();

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
