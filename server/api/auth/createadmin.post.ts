import { tables } from "~/server/utils/drizzle.ts";
import { cryptPassword } from "~/server/utils/hashPassword";

export default defineEventHandler(async (event) => {
  const db = useDrizzle();
  try {
    const newPassword = await cryptPassword("123456789");
    const newUser = await db
      .insert(tables.users)
      .values({
        email: "nimaparandavar2@gmail.com",
        password: newPassword,
        role: "admin",
        firstName: "Nima",
        lastName: "Parandavar",
        isActive: true,
      })
      .returning()
      .get();
    return newUser;
  } catch (error) {
    console.error(error);
    return error;
  }
});
