const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  data: {
    type: String,
    required: [true, "Please enter a valid todo"],
    minlength: [6, "Todo must be more that 6 characters"]
  },
});

const Todo = mongoose.model("todo", todoSchema)
module.exports = Todo