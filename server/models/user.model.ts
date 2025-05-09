import { User } from "../schemas/user.schema";
import type { UserDocument } from "../types/user";
import BaseModel from "./baseModel";

export class UserModel extends BaseModel<UserDocument> {
  constructor() {
    super(User)
  }
}