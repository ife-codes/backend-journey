const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { accessToken, refreshToken } = require("../utils/handleTokens");

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

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const access = accessToken(user._id);
    const refresh = refreshToken(user._id);
    res.cookie("refreshToken", refresh, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
    });
    res.status(200).json({ user: user._id, access_token: access });
  } catch (error) {
    console.log(error);
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const profilePic = req.file.path;
    const user = await User.create({
      email,
      password,
      profilePicture: profilePic,
    });
    const access = accessToken(user._id);
    const refresh = refreshToken(user._id);
    res.cookie("refreshToken", refresh, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
    });
    res.status(200).json({ user: user._id, access_token: access });
  } catch (error) {
    console.log(error);
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const refreshToken = (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ msg: "No refresh token" });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN, (error, decoded) => {
    if (error) {
      return res.status(403).json({ msg: "Invalid token" });
    }

    const access = accessToken(decoded.id)
    res.json({ access_token: access })
  });
};

const logout = () => {};

module.exports = {
  login_post,
  signup_post,
  refreshToken,
  logout,
};
