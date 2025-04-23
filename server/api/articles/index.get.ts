export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    return await ArticleSchema.find({ ...query })
  }
  catch (error) {
    return error
  }
})
