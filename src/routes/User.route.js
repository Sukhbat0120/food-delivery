import { Router } from "express";
import { login, signUp } from "../controlled/user.controller.js";

export const userRouter = Router();

userRouter.post("/signup", signUp).get("/sign-in", login);
