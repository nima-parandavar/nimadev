export default defineEventHandler(async (event) => {
  const db = useDrizzle();

  try {
    const data = await db.query.categories.findMany();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
