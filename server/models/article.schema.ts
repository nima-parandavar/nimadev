import { defineMongooseModel } from '#nuxt/mongoose'
import slugValidator from '../validators/slugValidator'

export const ArticleSchema = defineMongooseModel({
  name: 'Article',
  schema: {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: slugValidator,
        message: props => `${props.value} is not a valid slug`
      }
    },
    cover: {
      type: String
    },
    body: {
      type: String
    },
    status: {
      type: String,
      enum: ['published', 'draft'],
    }
  },
  options: {
    timestamps: true,

  }
})