const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const authError = {
  auth: "You're currently logged out",
};

const requestAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SOUP, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.status(403).json({ errors: authError });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ errors: authError });
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SOUP, async (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        next();
      } else {
        req.user = decodedToken.id;  // Store user in the request object
        next();  // Continue to the next middleware or route handler
      }
    });
  } else {
    next();  // No token, move on
  }
};

module.exports = { requestAuth, checkUser };
