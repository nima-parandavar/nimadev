import { drizzle } from "drizzle-orm/better-sqlite3";
import { categories } from "~/server/database/schema/category.schema";

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event);

  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { categories },
  });

  try {
    const category = await db.insert(categories).values({ ...body });
    return category;
  } catch (error) {
    console.error(error);
    return error;
  }
});
