import { Schema } from "mongoose";
import emailValidation from "../validations/email.validation";
import type { UserDocument } from "../types/user";

export const UserSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: emailValidation,
      message: (props: any) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["admin", "staff", "user"],
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
