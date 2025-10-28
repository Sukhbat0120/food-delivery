import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";
import { CategoryRouter } from "./routes/foodCategory.route.js";
import { userRouter } from "./routes/User.route.js";

configDotenv();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use("/category", CategoryRouter);

app.use("/user", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`server running  !! http://localhost:${port}`);
});
