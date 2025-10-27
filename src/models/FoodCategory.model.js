import { Schema, model } from "mongoose";

const FoodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const FoodCategory = model("FoodCategory", FoodCategorySchema);
