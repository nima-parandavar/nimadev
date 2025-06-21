import { ImageModel } from "../../models/image.model";

export default defineEventHandler(async (event) => {
  try {
    const imageModel = new ImageModel();
    return await imageModel.list();
  } catch (error) {
    return error;
  }
});
