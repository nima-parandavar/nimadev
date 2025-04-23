import { ArticleSchema } from "~/server/models/article.schema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    return await new ArticleSchema(body).save()
  }
  catch (error) {
    return error
  }
})
