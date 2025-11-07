import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controlled/foodCategory.controller.js";

export const CategoryRouter = Router();

CategoryRouter.post("/food-category", createFoodCategory)
  .get("/food-category", getFoodCategory)
  .patch("/food-category", updateFoodCategory)
  .delete("/food-category", deleteFoodCategory);
