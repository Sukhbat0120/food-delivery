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
export const getFoodCategory = async (req, res) => {
  try {
    const { body } = req;
    const foodCategory = await FoodCategory.get(body);
    res.status(200).send({ message: "success", data: foodCategory });
  } catch (error) {
    console.error(error);
  }
};
export const updateFoodCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await FoodCategory.findByIdAndUpdate(id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
export const deleteFoodCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await FoodCategory.findByIdAndDelete(id);
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
