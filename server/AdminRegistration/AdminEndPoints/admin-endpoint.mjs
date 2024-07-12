import express from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { adminValidator } from "../Admin-validator/admin-validator.mjs";
import { Admin } from "../admin-schema.mjs";
import { hashPassword } from "../../HASHING/hashing-password.mjs";
const adminRout = express.Router();

//// making a post request

adminRout.post(
  "/api/user/admin/new",
  checkSchema(adminValidator),
  async (req, res) => {
    const result = validationResult(req);
    const data = matchedData(req);
    // if validation failed
    if (!result.isEmpty()) return res.status(401).json(result.array());
    // if successfull
    try {
      data.password = hashPassword(data.password);
      const newAdmin = new Admin(data);
      const savedAdmin = await newAdmin.save();
      return res.status(201).json(savedAdmin);
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  }
);

/// get request

adminRout.get("/api/user/admin", async (req, res) => {
  try {
    // getting all admins from database
    const allAdmins = await Admin.find();
    return res.status(200).json(allAdmins);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default adminRout;
