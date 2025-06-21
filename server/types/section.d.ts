import type { Document, Types } from "mongoose";
import type { MultiLanguageDocument } from "./multiLanguage";
import type { ContentDocument } from "./content";

interface SectionDocument extends Document {
  title?: MultiLanguageDocument;
  order: number;
  contents: Types.Array<ContentDocument>;
}

export type SectionDocument = SectionDocument;
