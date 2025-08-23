import { drizzle } from "drizzle-orm/better-sqlite3";
import { users } from "~/server/database/schema/user.schema";
import { cryptPassword } from "~/server/utils/hashPassword";

export default defineEventHandler(async (event) => {
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { users },
  });
  try {
    const newPassword = await cryptPassword("123456789");
    const newUser = await db.insert(users).values({
      email: "admin@admin.com",
      password: newPassword,
      role: "admin",
      firstName: "Nima",
      lastName: "Parandavar",
      isActive: true,
    });
    return newUser;
  } catch (error) {
    console.error(error);
    return error;
  }
});
