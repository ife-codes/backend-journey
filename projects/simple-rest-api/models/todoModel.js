const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid todo"],
      minlength: [6, "Todo must be more than 6 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter a valid todo"],
      minlength: [15, "Todo must be more than 15 characters"],
      maxlength: [60, "Todo must be less than 60 characters"],
    },
    user: {
      type: String,
      required: [true, "User id must be provided"],
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
