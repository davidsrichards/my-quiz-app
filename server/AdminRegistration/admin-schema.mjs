import mongoose from "mongoose";

// creatin admin schema

const AdminSchema = new mongoose.Schema({
  firstname: {
    type: mongoose.Schema.Types.String,
  },
  lastname: {
    type: mongoose.Schema.Types.String,
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
  password: {
    type: mongoose.Schema.Types.String,
  },
  phone: {
    type: mongoose.Schema.Types.String,
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
