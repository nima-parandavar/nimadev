import crypto from "crypto";

export async function hashPassword(
  password: string,
  size: number = 16,
  keyLength: number = 64
) {
  const salt = crypto.randomBytes(size).toString("hex");
  const hashedPassword = crypto
    .scryptSync(password, salt, keyLength)
    .toString("hex");
  return `${salt}:${hashedPassword}`;
}

export async function checkPassword(
  password: string,
  hashedPassword: string,
  keyLength = 64
) {
  const [salt, hash] = hashedPassword.split(":");
  const hashedAttempt = crypto
    .scryptSync(password, salt, keyLength)
    .toString("hex");
  return hash === hashedAttempt;
}
