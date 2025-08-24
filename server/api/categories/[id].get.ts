import { drizzle } from "drizzle-orm/better-sqlite3";
import { categories } from "~/server/database/schema/category.schema";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { categories },
  });

  try {
    const data = await db.query.categories.findFirst({
      where: (categories, { eq }) => eq(categories.id, Number(id)),
    });

    if (!data) {
      return sendErrorMessage(404, "Category not found");
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
