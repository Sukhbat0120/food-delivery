import { Schema, model } from "mongoose";

const foodOrderItemsSchema = new Schema({
  food: { type: Schema.Types.ObjectId, ref: "Food" },
  quantity: { type: Number },
});

export const foodOrderItems = model("foodOrderItems", foodOrderItemsSchema);
