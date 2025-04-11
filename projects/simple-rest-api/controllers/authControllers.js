const User = require("../models/authModel");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const handleErrors = (error) => {
  let errors = { email: "", password: "" };

  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  if (error.message.includes("Incorrect email")) {
    errors.email = "that email does not exist";
  }

  if (error.message.includes("Incorrect password")) {
    errors.password = "that password is incorrect";
  }

  if (
    error.code === 11000 ||
    (error.name === "MongoServerError" && error.code === 11000) ||
    error.message.includes("duplicate key error")
  ) {
    errors.email = "This email already exists";
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SOUP, {
    expiresIn: maxAge,
  });
};


const login_post = async(req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });
    } catch (error) {
      console.log(error);
      const errors = handleErrors(error);
      res.status(400).json({ errors });
    }
};  

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    console.log(error);
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports = {
  login_post,
  signup_post,
};
