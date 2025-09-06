import { tables } from "~/server/utils/drizzle.ts";

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event);

  const db = useDrizzle();

  try {
    const category = await db.insert(tables.categories).values({ ...body });
    return category;
  } catch (error) {
    console.error(error);
    return error;
  }
});
