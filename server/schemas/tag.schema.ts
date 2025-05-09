import { Schema, Types, model } from 'mongoose'

export const TagSchema = new Schema({
  name: { type: String, required: true, unique: true }
})

export const Tag = model('Tag', TagSchema)

