import { Document, Schema, model, models } from "mongoose";

interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: Record<string, any>;
  transformationUrl?: URL;
  aspectRatio?: string;
  author?: {
    _id: string;
    firstName: string;
    lastname: string;
  }; // Assuming Schema.Types.ObjectId is imported from Mongoose
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
