const Link = require("../models/linkModel");

const handleErrors = (error) => {
  let errors = { title: "", url: "", category: "", notes: "", user: "" }; 

  // if (error.message.includes("link validation failed")) {
  //   Object.values(error.errors).forEach(({ properties }) => {
  //     errors[properties.path] = properties.message;
  //   });
  // }

  console.log(error);

  return errors;
};

const todos_get = async (req, res) => {
  res.send("todo delete request");
};

const todos_post = async (req, res) => {
  res.send("todo post request");
};

const update_post = async (req, res) => {
  res.send("todo update request");
};

const delete_func = async (req, res) => {
  res.send("todo delete request");
};

module.exports = {
  todos_get,
  todos_post,
  update_post,
  delete_func,
};
