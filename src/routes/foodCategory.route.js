import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategory,
  updateFoodCategory,
} from "../controlled/foodCategory.controller.js";

export const CategoryRouter = Router();

CategoryRouter.post("/", createFoodCategory)
  .get("/get", getFoodCategory)
  .patch("/update", updateFoodCategory)
  .delete("/delete", deleteFoodCategory);
