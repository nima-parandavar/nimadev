import { drizzle } from "drizzle-orm/better-sqlite3";
import { categories } from "~/server/database/schema/category.schema";

export default defineEventHandler(async (event) => {
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { categories },
  });

  try {
    const data = await db.query.categories.findMany();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
