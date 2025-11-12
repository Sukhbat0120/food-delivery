import { Food } from "../models/food.model.js";

export const createFood = async (req, res) => {
  try {
    const { body } = req;
    const food = await Food.create(body);
    console.log(req.data);
    res.status(200).send({ message: "hool", data: food });
  } catch (error) {
    res.status(500).send({ message: "hool bhgu bbn" });
  }
};
export const getFood = async (req, res) => {
  try {
    const { body } = req;
    const food = await Food.find(body).populate("FoodCategory");
    res.status(200).send({ message: "success", data: food });
  } catch (error) {
    console.error(error);
  }
};
export const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Food.findByIdAndUpdate(id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
export const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Food.findByIdAndDelete(id);
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
