import { drizzle } from "drizzle-orm/better-sqlite3";
import { categories } from "~/server/database/schema/category.schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = getRouterParam(event, "id");
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { categories },
  });

  try {
    const category = await db.query.categories.findFirst({
      where: (categories, { eq }) => eq(categories.id, Number(id)),
    });

    if (!category) {
      return sendErrorMessage(404, "Category not found");
    }

    return await db
      .update(categories)
      .set(body)
      .where(eq(categories.id, Number(id)));
  } catch (error) {
    console.error(error);
    return error;
  }
});
