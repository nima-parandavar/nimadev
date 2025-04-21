import { z } from 'zod'

const bosySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bosySchema.parse)
  try {
    const user = await UserSchema.findOne({ email: email })
    if (user && await verifyPassword(user.password, password)) {
      await setUserSession(event, {
        user: {
          firstName: user.firstName,
          lastName: user.lastName
        },
        secure: {
          id: user.id
        },
        loggedInAt: new Date()
      })
      return user
    }
    throw createError({
      statusCode: 401,
      message: "Email or password is wrong"
    })
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Bad credentials"
    })
  }
})
