import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controlled/Food.controller.js";

export const foodRouter = Router();
foodRouter
  .post("/", createFood)
  .get("/", getFood)
  .patch("/", updateFood)
  .delete("/", deleteFood);
