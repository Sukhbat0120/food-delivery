import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    //_id: { type: [Schema.ObjectId] },
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Food = model("Food", FoodSchema);
