import { drizzle } from "drizzle-orm/d1";
export { sql, eq, and, or } from "drizzle-orm";

import { articles } from "../database/schema/article.schema";
import { categories } from "../database/schema/category.schema";
import { users } from "../database/schema/user.schema";

const schema = { articles, categories, users };

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}
