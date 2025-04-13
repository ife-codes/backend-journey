// imports
const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config()
const mongoSanitizer = require("express-mongo-sanitize");

// Local imports
const authRoutes = require("./routes/authRoutes")
const linkRoutes = require("./routes/linkRoutes");
const { requestAuth, checkUser } = require("./middleware/authMiddleware");

// initialization
const app = express();

// view engine
app.set("view engine", "ejs");

// db connection
const dbURI = process.env.MONGOOSE_CONNECTION_STRING;

mongoose
  .connect(dbURI)
  .then((res) => {
    app.listen(3000, () => {
      console.log("Connected to database");
      console.log("API is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(mongoSanitizer());

// requests

app.get("/", (req, res) => {
  res.redirect("/links");
});
app.use("/api/auth", authRoutes);
app.use("/api/links", requestAuth, checkUser, linkRoutes);

// handle 404 requests
app.use((req, res) => {
  res.status(404).json({error: "Invalid request"});
});