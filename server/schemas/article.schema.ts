import { Schema, Types, model } from 'mongoose'
import { TagSchema } from './tag.schema'
import slugValidation from '../validations/slug.validation'


export const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: slugValidation,
      message: (props: any) => `${props.value} is not valid`
    }
  },
  cover: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  tags: {
    type: Types.Array<typeof TagSchema>,
    required: false
  }
}, { timestamps: true })

export const Blog = model('Blog', BlogSchema)
