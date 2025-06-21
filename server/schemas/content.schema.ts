import { Schema, Types } from "mongoose";
import type { ContentDocument } from "../types/content";
import { MultiLanguageSchema } from "./multiLanguage.schema";
import type Context from "../types/content";

export const ContentSchema = new Schema<ContentDocument>({
  title: {
    type: MultiLanguageSchema,
    required: false,
  },
  subtitle: { type: MultiLanguageSchema, required: false },
  date: { type: Date, required: false },
  type: { type: String, enum: ["text", "keyvalue", "keyRate"], required: true },
  alignment: { type: String, enum: ["column", "row"], default: "column" },
  context: { type: Object, required: false },
});
