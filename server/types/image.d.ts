import { Document } from 'mongoose'
import type { ServerFile } from 'nuxt-file-storage'

export interface ImageDocument extends Document {
  image: string | ServerFile
}
