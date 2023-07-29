import { Schema, InferSchemaType, model, Document } from "mongoose";
import { IUser } from "../types/types";

export interface IProductInput {
  user: IUser["_id"];
  description: string;
  price: number;
  image: string;
  name: string;
  brand: string;
  category: string;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface IProduct extends IProductInput, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    reviews: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
