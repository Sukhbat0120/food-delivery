import { Router } from "express";
import { createFoodCategory } from "../controlled/foodCategory.controller.js";

export const CategoryRouter = Router();

CategoryRouter.post("/", createFoodCategory);
