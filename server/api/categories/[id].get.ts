export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const db = useDrizzle();

  try {
    const data = await db.query.categories.findFirst({
      where: (categories, { eq }) => eq(categories.id, Number(id)),
    });

    if (!data) {
      throw sendErrorMessage(404, "Category not found");
    }
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
