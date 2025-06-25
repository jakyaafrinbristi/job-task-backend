import { Document } from "mongoose";

export type ProductCategory = 'Breakfast' | 'Lunch' | 'Dinner';

export interface IProduct extends Document {
  name: string;
  category: ProductCategory;
  price: number;
  imageUrl: string;
  rating?: number; 

 
  createdAt: Date;
  updatedAt: Date;
}
