import { Schema, InferSchemaType, model, Document } from "mongoose";

export interface IUserInput {
  email: string;
  name: string;
  isAdmin: boolean;
  password: string;
}

export interface IUser extends IUserInput, Document {
  createdAt: Date;
  updatedAt: Date;
  // comparePassword(providedPassword: string): Promise<boolean>;
}
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
