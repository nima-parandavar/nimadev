import { Schema, model } from 'mongoose'
import type { ImageDocument } from '../types/image'
import imageExtensionValidation from '../validations/imageExtension.validation'

export const ImageSchema = new Schema<ImageDocument>({
  image: {
    type: String,
    required: true,
    validate: {
      validator: imageExtensionValidation,
      message: props => `${props.value} is not a valid file`
    }
  }
})

export const Image = model<ImageDocument>('Image', ImageSchema)