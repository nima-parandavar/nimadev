import type { ImageDocument } from "../types/image";
import BaseModel from "./baseModel";
import { Image } from "../schemas/image.schema";
import type { ServerFile } from "nuxt-file-storage";
import imageExtensionValidation from "../validations/imageExtension.validation";
import type { PermissionMap } from "../permissions/baseModel";
import { IsAuthenticated } from "../permissions/isAuthenticated";
import { IsAdmin } from "../permissions/isAdmin";

const permissions: PermissionMap = {
  create: [new IsAuthenticated()],
}

export class ImageModel extends BaseModel<ImageDocument> {

  constructor() {
    super(Image, permissions)
  }

  override async create(data: Partial<ImageDocument>, context?: any): Promise<ImageDocument> {
    await this.checkPermissions('create', context)
    const { image } = data
    if (!image) {
      throw new Error("File dose not exist")
    }
    if (!imageExtensionValidation((image as ServerFile).name)) {
      throw new Error("File is not valid")
    }
    const { fullPath } = await this.uploadFile('/gallery', image as ServerFile)
    return await this.model.insertOne({ image: fullPath })
  }

}

