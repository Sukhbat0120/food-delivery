import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
import Jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const hashedPass = await bcrypt.hashSync(password, 10);
    console.log("old pass", password);
    console.log("hash pass", hashedPass);

    const user = await User.create({
      email,
      password: hashedPass,
    });
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const user = await User.findOne({ email });

    const token = Jwt.sign(user.toObject(), "secret-key", { expiresIn: "1h" });
    console.log(user, token);
    res.send({ user, token });

    if (!user.length) {
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      res.status(403).send({ message: "Password incorrect!!" });
    }
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndUpdate(id);
    console.log(result, "Update Result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
