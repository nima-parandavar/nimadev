import { model } from "mongoose";
import { UserSchema } from "./user.schema";
import { TagSchema } from "./tag.schema";
import { ResumeSchema } from "./resume.schema";
import { ImageSchema } from "./image.schema";
import { BlogSchema } from "./article.schema";
import type { UserDocument } from "../types/user";
import type { TagDocument } from "../types/tag";
import type { ResumeDocument } from "../types/resume";
import type { ImageDocument } from "../types/image";
import type { ArticleDocument } from "../types/article";

export const User = model<UserDocument>("User", UserSchema);
export const Tag = model<TagDocument>("Tag", TagSchema);
export const Resume = model<ResumeDocument>("Resume", ResumeSchema);
export const Image = model<ImageDocument>("Image", ImageSchema);
export const Blog = model<ArticleDocument>("Blog", BlogSchema);
