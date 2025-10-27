import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";
import { CategoryRouter } from "./routes/foodCategory.route.js";

configDotenv();

const port = process.env.PORT;

const app = express();

app.use("/category", CategoryRouter);

app.use(bodyParser.json());

app.listen(port, () => {
  connectDB();
  console.log(`server running  !! http://localhost:${port}`);
});
