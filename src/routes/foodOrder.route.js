import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrderById,
  updateOrder,
} from "../controlled/foodOrder.controller";

export const OrderRouter = Router();

OrderRouter.post("/food-order", createOrder)
  .get("/food-order", getOrder)
  .get("/food-order", getOrderById)
  .patch("/food-order", updateOrder);
