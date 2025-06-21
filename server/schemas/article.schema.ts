import { Schema, Types } from "mongoose";
import { TagSchema } from "./tag.schema";
import slugValidation from "../validations/slug.validation";
import type { ArticleDocument } from "../types/article";

export const BlogSchema = new Schema<ArticleDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: slugValidation,
        message: (props: any) => `${props.value} is not valid`,
      },
    },
    cover: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    tags: {
      type: [TagSchema],
      required: false,
    },
  },
  { timestamps: true }
);
