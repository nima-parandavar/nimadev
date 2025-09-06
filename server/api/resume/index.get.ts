import enResume from "../../data/resume/en.json";
import faResume from "../../data/resume/fa.json";

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as { lang: "en" | "fa" };

  return query.lang === "en"
    ? enResume
    : query.lang === "fa"
      ? faResume
      : undefined;
});
