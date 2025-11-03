import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";

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
