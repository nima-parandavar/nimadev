import { tables } from "~/server/utils/drizzle.ts";

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event);

  const db = useDrizzle();
  try {
    const article = await db
      .insert(tables.articles)
      .values({ ...body, publishedAt: new Date() });
    return article;
  } catch (error) {
    console.error(error);
    return error;
  }
});
