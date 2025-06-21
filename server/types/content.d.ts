import type { Document, Types } from "mongoose";
import type { MultiLanguageDocument } from "./multiLanguage";

type ContentType = "text" | "keyvalue" | "keyRate";
type Alignment = "column" | "row";

type TextContext = MultiLanguageDocument;
interface KeyvalueContext {
  key: MultiLanguageDocument;
  value: MultiLanguageDocument;
  type: "text" | "link" | "address" | "tel";
}
interface KeyRateContext {
  key: MultiLanguageDocument;
  rate: number;
  totalRate: number;
}
type Context = TextContext | KeyvalueContext | KeyRateContext;

interface ContentDocument extends Document {
  title?: MultiLanguageDocument;
  subtitle?: MultiLanguageDocument;
  date?: Date;
  type: ContentType;
  alignment: Alignment;
  context?: Context;
}

export type ContentDocument = ContentDocument;
export default Context;
