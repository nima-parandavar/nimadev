import fs from "fs";

export default defineEventHandler(async (event) => {
  const { _: url } = getRouterParams(event);
  const fileName = url.split("/").at(-1);
  const ext = fileName?.split(".").at(-1);

  setHeader(event, "Content-Type", `image/${ext}`);

  try {
    const file = getFileLocally(fileName as string, "/gallery");
    return fs.createReadStream(file);
  } catch (error) {
    return "";
  }
});
