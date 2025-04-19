const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authError = {
  auth: "You're currently logged out",
};

const requestAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);
  

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ errors: authError });
  } else {
    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.status(403).json({ errors: "Invalid Token" });
      } else {
        req.userId = decodedToken.id
        next();
      }
    });
  }
};

module.exports = { requestAuth };
