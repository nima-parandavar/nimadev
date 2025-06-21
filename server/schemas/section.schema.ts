import { Schema } from "mongoose";
import type { SectionDocument } from "../types/section";
import { MultiLanguageSchema } from "./multiLanguage.schema";
import { ContentSchema } from "./content.schema";

export const SectionSchema = new Schema<SectionDocument>({
  title: { type: MultiLanguageSchema, required: false },
  order: { type: Number, required: true },
  contents: {
    type: [ContentSchema],
    required: false,
    default: [],
  },
});
