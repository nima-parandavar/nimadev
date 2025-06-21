import type { Document, Types } from "mongoose";
import type { MultiLanguage } from "./multiLanguage";
import type { SectionDocument } from "./section";

interface ResumeDocument extends Document {
  fullName: MultiLanguage;
  jobTitle: MultiLanguage;
  profileImg: string;
  backgroundImg?: string;
  sections: Types.Array<SectionDocument>;
}

export type ResumeDocument = ResumeDocument;
