import bcrypt from "bcrypt";
import { Order } from "../models/foodOrder.model.js";
import { User } from "../models/User.model.js";

export const createOrder = async (req, res) => {
  try {
    const { body } = req;
    const order = await Order.create(body);
    res.status(200).send({ message: "success", data: order });
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { body } = req;
    const order = await Order.get(body);
    res.status(200).send({ message: "success", data: order });
  } catch (error) {
    console.error(error);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Order.findById(id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Order.findByIdAndUpdate(id);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
