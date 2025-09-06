import { eq } from "drizzle-orm";
import { tables } from "~/server/utils/drizzle.ts";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const db = useDrizzle();

  try {
    const category = await db.query.categories.findFirst({
      where: (categories, { eq }) => eq(categories.id, Number(id)),
    });

    if (!category) {
      throw sendErrorMessage(404, "Category not found");
    }

    return await db
      .delete(tables.categories)
      .where(eq(tables.categories.id, Number(id)));
  } catch (error) {
    console.error(error);
    return error;
  }
});
