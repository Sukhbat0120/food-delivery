import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "Category" },
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);
export const Food = model("Food", FoodSchema);
