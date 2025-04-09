const Todo = require("../models/todoModel");

const handleErrors = (error) => {
  let errors = { todoError: "" };

  // if (error._message.includes("todo validation failed")) {
  //   errors.todoError = "Todo must be more that 6 characters";
  // }

  console.log(error);

  return errors;
};

const todos_get = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({todos})
  } catch (error) {
    res.send("Error fetching data");
    console.log(error);
  }
};

const todos_post = async (req, res) => {
  const user = req.user

  const { title, description } = req.body;

  try {
    const todo = await Todo.create({ title, description, user });
    res.status(201).json({ id: todo });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send({ errors: errors });
    console.log(error);
  }
};

const update_post = async (req, res) => {
  const id = req.params.id;
  const { data } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(id, { data });
    res.json({ redirect: "/" }); // Send JSON so frontend can handle redirect
  } catch (error) {
    res.send("Error updating todo");
    console.log(error);
  }
};

const delete_func = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.json({ redirect: "/todos" });
  } catch (error) {
    res.send("Error deleting todo");
    console.log(error);
  }
};

module.exports = {
  todos_post,
  update_post,
  delete_func,
};
