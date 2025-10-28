import { FoodCategory } from "../models/FoodCategory.model.js";

export const createFoodCategory = async (req, res) => {
  try {
    const { body } = req;
    const foodCategory = await FoodCategory.create(body);
    console.log(req.data);
    res.status(200).send({ message: "Success", data: foodCategory });
  } catch (error) {
    res.status(500).send({ message: "error !!", data: null });
  }
};
