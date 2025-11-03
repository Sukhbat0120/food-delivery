import { Router } from "express";
import { getFood } from "../controlled/Food.controller.js";

export const foodRouter = Router();
foodRouter.post("/food_id", getFood);
