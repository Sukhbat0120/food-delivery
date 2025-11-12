import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrderById,
  updateOrder,
} from "../controlled/foodOrder.controller.js";

export const OrderRouter = Router();

OrderRouter.post("/", createOrder)
  .get("/get", getOrder)
  .get("/getId", getOrderById)
  .patch("/update", updateOrder);
