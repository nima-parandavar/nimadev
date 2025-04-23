import { defineMongooseModel } from '#nuxt/mongoose'
import emailValidator from '../validators/emailValidator'

export const UserSchema = defineMongooseModel({
  name: 'User',
  schema: {
    email: {
      type: 'string',
      required: [true, "email address is required"],
      unique: [true, "this email is already exist"],
      validate: {
        validator: emailValidator,
        message: props => `${props.value} is not a valid email address`
      }
    },
    password: {
      type: 'string',
      required: true,
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    isActive: {
      type: Boolean
    },
    isSuperuser: {
      type: Boolean
    },
    dateJoin: {
      type: Date,
    },
    profile: {
      type: 'string'
    }
  },

})
