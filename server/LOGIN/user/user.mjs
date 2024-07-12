import { Router } from "express";
import { User } from "../../userSchema/userSchema.mjs";
import { comparePassword } from "../../HASHING/hashing-password.mjs";

/////////////

const loginRout = Router();

////////////

loginRout.post("/api/user/login", async (req, res) => {
  const { firstname, password } = req.body;
  try {
    const findUser = await User.findOne({
      firstname: firstname,
    });
    if (!findUser || !comparePassword(password, findUser.password))
      return res.status(400).json("Invalid Credentials");

    res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
  }
});

export default loginRout;
