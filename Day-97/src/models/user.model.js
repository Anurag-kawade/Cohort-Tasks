const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "With this email user already exists"],
  },
  password: String,
});

const userModel = mongoose.model("users", userScehma);

module.exports = userModel;
