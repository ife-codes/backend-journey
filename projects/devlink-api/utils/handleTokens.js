const jwt = require("jsonwebtoken");

const accessToken = async (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN, {
    expiresIn: "15min",
  });
};

const refreshToken = async (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN, {
    expiresIn: "15min",
  });
};

module.exports = { accessToken, refreshToken };
