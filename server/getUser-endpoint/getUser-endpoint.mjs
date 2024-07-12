import express from "express";
import { User } from "../userSchema/userSchema.mjs";
const getRout = express.Router();

getRout.get("/api/user", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default getRout;
