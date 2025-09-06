export default defineEventHandler(async (event) => {
  const form = await readFormData(event);
  const file = form.get("resume") as File;

  if (!file || !file.size) {
    throw createError({ statusCode: 400, message: "No file provided" });
  }

  ensureBlob(file, {
    maxSize: "1MB",
    types: ["application/pdf"],
  });

  return hubBlob().put(file.name, file, {
    addRandomSuffix: false,
    prefix: "resume",
  });
});
