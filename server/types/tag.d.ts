import type { Document } from "mongoose";

interface TagDocument extends Document {
  name: string;
}

export type TagDocument = TagDocument;
