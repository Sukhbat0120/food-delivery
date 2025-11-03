import { Food } from "../models/food.model.js";

export const getFood = async (req, res) => {
  try {
    const { body } = req;
    const food = await Food.create(body);
    console.log(req.data);
    res.status(200).send({ message: "hool", data: food });
  } catch (error) {
    res.status(500).send({ message: "hool bhgu bbn" });
  }
};
