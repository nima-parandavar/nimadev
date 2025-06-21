import type { ServerFile } from "nuxt-file-storage";

export default defineEventHandler(async (event) => {
  try {
    const body = (await readBody(event)) as { image: ServerFile };
    const imageModel = new ImageModel();
    const image = await imageModel.create(body, { event: event });
    return image as ImageAPI;
  } catch (error) {
    return createError({
      status: 500,
      statusCode: 500,
      message: `Server Error: ${error}`,
    });
  }
});

interface ImageAPI {
  _id: string;
  image: string;
}
