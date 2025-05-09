import { z } from 'zod'
import { User } from '~/server/schemas/user.schema'

const validateBody = z.object({
  email: z.string().email('email is not valid'),
  password: z.string()
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, validateBody.parse)
  const user = await User.findOne({ email: email })

  if (!user) {
    return createError({ status: 401, statusCode: 401, message: 'Email or Password is wrong' })
  } else {
    if (!await verifyPassword(user.password, password)) {
      return createError({ status: 401, statusCode: 401, message: 'Email or Password is wrong' })
    }

    if (!user.isActive) {
      return createError({ status: 403, statusCode: 403, message: 'Forbidden' })
    }
    await setUserSession(event, {
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email, userID: user._id, image: user.image, role: user.role, isActive: user.isActive }
    })
    return user
  }
})
