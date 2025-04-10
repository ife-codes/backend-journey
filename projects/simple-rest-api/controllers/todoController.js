const Todo = require("../models/todoModel");

const handleErrors = (error) => {
  let errors = { title: "", description: "", user: "" };

  // if (error._message.includes("todo validation failed")) {
  //   errors.todoError = "Todo must be more that 6 characters";
  // }

  if (error.message.includes("todo validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  console.log(error);

  return errors;
};

const todos_get = async (req, res) => {
  const user = req.user;
  try {
    const todos = await Todo.find({ user }).sort({ createdAt: -1 });
    if(!todos) {
      res.status(200).json({todos: "Your todos are empty"})
    }
    else {
      res.status(200).json({ todos });
    }
  } catch (error) {
    res.status(500).send("Error fetching data");
    console.log(error);
  }
};

const todos_post = async (req, res) => {
  const user = req.user;

  const { title, description } = req.body;

  try {
    const todo = await Todo.create({ title, description, user });
    res.status(201).json({ id: todo });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(500).send({ errors: errors });
    console.log(error);
  }
};

const update_post = async (req, res) => {
  const id = req.params.id;
  const user = req.user;

  const { title, description } = req.body;

  try {
    if (id === req.user) {
      const todo = await Todo.findByIdAndUpdate(id, {
        title,
        description,
        user,
      });
      res.status(201).json({ update: "Update successful" });
    } else {
      res.status(500).send("This id is invalid");
    }
  } catch (error) {
    res.status(500).send("Error updating todo");
    console.log(error);
  }
};

const delete_func = async (req, res) => {
  const id = req.params.id;

  try {
    if (id === req.user) {
      const todo = await Todo.findByIdAndDelete(id);
      res.status(201).json({ delete: "Deleted todo successfully" });
    } else {
      res.status(500).send("This id is invalid");
    }
  } catch (error) {
    res.status(500).send("Error deleting todo");
    console.log(error);
  }
};

module.exports = {
  todos_get,
  todos_post,
  update_post,
  delete_func,
};
