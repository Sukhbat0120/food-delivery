import { Router } from "express";
import { createFoodCategory } from "../controlled/foodCategory.controlled.js";

export const CategoryRouter = Router();

CategoryRouter.post("/", createFoodCategory);
