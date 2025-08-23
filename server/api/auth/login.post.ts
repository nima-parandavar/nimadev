import { drizzle } from "drizzle-orm/better-sqlite3";
import { users } from "~/server/database/schema/user.schema";
import { checkPassword } from "~/server/utils/hashPassword";
import sendErrorMessage from "~/server/utils/sendErrorMessage";

interface body {
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const db = drizzle({
    connection: { source: process.env.DB_URL },
    schema: { users },
  });
  const body = await readBody<body>(event);

  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, body.email),
    });

    if (user) {
      const isPasswordValid = await checkPassword(body.password, user.password);
      if (isPasswordValid && user.isActive) {
        await setUserSession(event, {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          },
        });
        return user;
      }
    }
    return sendErrorMessage(400, "username or password is wrong");
  } catch (error) {
    console.error(error);
    return error;
  }
});
