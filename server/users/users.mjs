////////////////

import { Router } from "express";
import { validationResult, checkSchema, matchedData } from "express-validator";
import { userValidator } from "../user-validator/user-validator.mjs";
import { User } from "../userSchema/userSchema.mjs";
import { hashPassword } from "../HASHING/hashing-password.mjs";

const regRout = Router();

///////// post request

regRout.post("/api/user/new", checkSchema(userValidator), async (req, res) => {
  const result = validationResult(req);
  const data = matchedData(req);
  console.log(result.array());

  try {
    const findUserByEmail = await User.findOne({ email: data.email });
    if (findUserByEmail) return res.status(501).send("User Already Exist");
  } catch (error) {
    console.log(error);
  }

  /////////////////

  try {
    if (!result.isEmpty()) return res.status(401).send(result.array());
    data.password = hashPassword(data.password);
    console.log(data);
    const newUser = new User(data);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
});

export default regRout;
