import { User } from "../schemas/user.schema";
import { hashPassword } from "../utils/password";
import emailValidation from "../validations/email.validation";
import mongoose from "mongoose";
import inquirer from "inquirer";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

async function connectDB(uri: string) {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(uri);
}

async function main() {
  try {
    console.log(chalk.blackBright("Create admin user"));
    const answers = await inquirer.prompt([
      {
        name: "email",
        message: "Email address:",
        validate: (v: string) => emailValidation(v) || "Email is not valid",
        required: true,
      },
      {
        name: "firstName",
        required: false,
        message: "First name",
      },
      {
        name: "lastName",
        required: false,
        message: "Last name: ",
      },
      {
        name: "password",
        type: "password",
        mask: "*",
        message: "password:",
        required: true,
      },
      {
        name: "repeatPassword",
        type: "password",
        mask: "*",
        message: "Repeat password:",
        required: true,
      },
    ]);

    if (answers.password !== answers.repeatPassword) {
      throw new Error("Passwords do not match");
    }
    if (!process.env.MONGODB_URI) {
      throw new Error("No mongoDB URI set");
    }
    await connectDB(process.env.MONGODB_URI);

    const user = await User.findOne({ email: answers.email });
    if (user) {
      throw new Error("This email is already exist");
    }

    const hashedPassword = await hashPassword(answers.password);

    await User.insertOne({
      email: answers.email,
      password: hashedPassword,
      firstName: answers.firstName,
      lastName: answers.lastName,
      role: "admin",
      isActive: true,
    });
    console.log(chalk.green("✅ Admin user created successfully!"));
  } catch (error) {
    return console.error(chalk.redBright(error));
  } finally {
    process.exit();
  }
}

main();
