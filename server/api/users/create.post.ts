import { UserSchema } from "~/server/models/user.schema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    body.password = await hashPassword(body.password)
    return await new UserSchema(body).save()
  }
  catch (error) {
    return error
  }
})
