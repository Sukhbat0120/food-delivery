import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String, required: true, select: false },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);
export const Food = model("Food", FoodSchema);
