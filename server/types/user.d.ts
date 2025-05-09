import { Document } from 'mongoose'

export interface UserDocument extends Document {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  image?: string | null;
  role: 'admin' | 'staff' | 'user';
  isActive: boolean
}