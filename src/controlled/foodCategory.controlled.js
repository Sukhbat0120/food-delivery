import { FoodCategory } from "../models/FoodCategory.model.js";

export const createFoodCategory = async (req, res) => {
  try {
    const { body } = req;
    const foodCategory = await FoodCategory.create(body);
    res.status(200).send({ message: "Amjittai", data: foodCategory });
  } catch (error) {
    res.status(500).send({ message: "Aldaa garsan !!", data: null });
  }
};
