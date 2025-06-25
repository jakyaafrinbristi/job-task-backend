// src/modules/product/product.validation.ts
import { z } from "zod";

export const createProductZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    category: z.enum(["Breakfast", "Lunch", "Dinner"], {
      required_error: "Category must be one of: Breakfast, Lunch, Dinner",
    }),
    price: z.number({ required_error: "Price is required" }),
    imageUrl: z.string().url({ message: "Must be a valid image URL" }),
    rating: z.number().min(0).max(5).optional(),
  }),
});
