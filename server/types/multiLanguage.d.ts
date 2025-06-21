import type { Document } from "mongoose";

interface MultiLanguageDocument extends Document {
  fa: string;
  en?: string;
}

export type MultiLanguageDocument = MultiLanguageDocument;
