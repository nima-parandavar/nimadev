import type { Document } from "mongoose";
import type { ServerFile } from "nuxt-file-storage";

interface ImageDocument extends Document {
  image: string | ServerFile;
}

export type ImageDocument = ImageDocument;
