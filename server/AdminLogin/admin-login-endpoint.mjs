import express from "express";
import { Admin } from "../AdminRegistration/admin-schema.mjs";
import { comparePassword } from "../HASHING/hashing-password.mjs";

const adminLoginRout = express.Router();

// post request
adminLoginRout.post("/api/user/admin/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findAdmin = await Admin.findOne({ firstname: username });
    // if not found
    if (!findAdmin || !comparePassword(password, findAdmin.password))
      return res.status(404).json("Invalid Credentials");
    // if found
    return res.status(200).json(findAdmin);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default adminLoginRout;
