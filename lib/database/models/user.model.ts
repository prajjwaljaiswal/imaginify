import { Document, Schema, model, models } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName?: string;
  userName: string;
  photo: string;
  email: string;
  clerkId: string;
  planId?: number;
  creditBalance?: number;
}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  userName: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("Image", UserSchema);

export default User;
