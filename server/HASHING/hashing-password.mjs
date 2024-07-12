import bcrypt from "bcrypt";

//// function to hash password

const saltRound = 10;

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(password, salt);
};

//// compare password

export const comparePassword = (plain, hashed) =>
  bcrypt.compareSync(plain, hashed);
