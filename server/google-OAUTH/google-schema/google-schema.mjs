import mongoose from "mongoose";

///// creating a new schema

const GoogleSchema = new mongoose.Schema({
  fullName: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
  googleId: {
    type: mongoose.Schema.Types.String,
  },
  picture: {
    type: mongoose.Schema.Types.String,
  },
});

export const Google = mongoose.model("Google", GoogleSchema);
