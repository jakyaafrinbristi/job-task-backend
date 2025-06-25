import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Breakfast', 'Lunch', 'Dinner'],
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
