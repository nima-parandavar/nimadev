import { User } from "../schemas/schemas";
import type { UserDocument } from "../types/user";
import BaseModel from "./baseModel";

export class UserModel extends BaseModel<UserDocument> {
  constructor() {
    super(User);
  }
}
