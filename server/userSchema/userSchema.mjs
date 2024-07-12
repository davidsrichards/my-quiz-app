//////////////////

import mongoose from "mongoose";

///////////////////////////

const newUser = new mongoose.Schema({
  firstname: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  lastname: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },

  phone: {
    type: mongoose.Schema.Types.String,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

////////////////////

export const User = mongoose.model("Users", newUser);
