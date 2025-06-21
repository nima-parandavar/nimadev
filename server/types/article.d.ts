import type { Document, Types } from "mongoose";
import type { TagDocument } from "./tag";

interface ArticleDocument extends Document {
  title: string;
  slug: string;
  cover: string;
  content: string;
  tags: Types.Array<TagDocument>;
}

export type ArticleDocument = ArticleDocument;
