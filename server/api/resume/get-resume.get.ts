export default defineEventHandler(async (event) => {
  return await hubBlob().serve(event, "resume/nima-parandavar-resume.pdf");
});
