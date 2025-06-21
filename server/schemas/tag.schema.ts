import { Schema } from "mongoose";
import type { TagDocument } from "../types/tag";

export const TagSchema = new Schema<TagDocument>({
  name: { type: String, required: true, unique: true },
});
