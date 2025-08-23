import bcrypt from "bcryptjs";

export async function cryptPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    return error;
  }
}

export async function checkPassword(
  rawPassword: string,
  hashedPassword: string
) {
  try {
    return bcrypt.compare(rawPassword, hashedPassword);
  } catch (error) {
    return error;
  }
}
