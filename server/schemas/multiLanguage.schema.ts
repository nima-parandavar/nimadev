import { Schema } from "mongoose";
import type { MultiLanguageDocument } from "../types/multiLanguage";

export const MultiLanguageSchema = new Schema<MultiLanguageDocument>({
  en: { type: String, required: false },
  fa: { type: String, required: true },
});
