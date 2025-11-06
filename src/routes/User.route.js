import { Router } from "express";
import {
  deleteUser,
  login,
  signUp,
  updateUser,
} from "../controlled/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouter = Router();

userRouter
  .post("/signup", signUp)
  .get("/sign-in", login, verifyToken)
  .delete("/delete", deleteUser)
  .patch("/update", updateUser);
