import { Schema, model } from "mongoose";
import { foodOrderItems } from "./foodOrderItem.model.js";

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    totalPrice: { type: Number },
    foodOrderItems: { type: Schema.Types.ObjectId, ref: "foodOrderItems[]" },
    status: { type: String, enum: ["PENDING", "CANCELED", "DELIVERED"] },
  },
  {
    timestamps: true,
  }
);

export const Order = model("Order", OrderSchema);
