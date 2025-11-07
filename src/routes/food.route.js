import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controlled/Food.controller.js";

export const foodRouter = Router();
foodRouter
  .post("/food_id", createFood)
  .get("/food_id", getFood)
  .patch("/food_id", updateFood)
  .delete("/food_id", deleteFood);
