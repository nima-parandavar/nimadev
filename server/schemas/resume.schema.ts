import { Schema } from "mongoose";
import type { ResumeDocument } from "../types/resume";
import { MultiLanguageSchema } from "./multiLanguage.schema";
import { SectionSchema } from "./section.schema";

export const ResumeSchema = new Schema<ResumeDocument>({
  fullName: { type: MultiLanguageSchema, required: true },
  jobTitle: { type: MultiLanguageSchema, required: true },
  profileImg: { type: String, required: true },
  backgroundImg: { type: String, required: false },
  sections: {
    type: [SectionSchema],
    required: false,
    default: [],
  },
});
