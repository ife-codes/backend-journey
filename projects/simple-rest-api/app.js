// imports
const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Local imports
const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/todoRoutes");
const { requestAuth, checkUser } = require("./middleware/authMiddleware");

// initialization
const app = express();

// view engine
app.set("view engine", "ejs");

// db connection
const dbURI =
  "mongodb+srv://ife:praisejoseph23@nodify.sieym.mongodb.net/todolist-api?retryWrites=true&w=majority&appName=Nodify";

mongoose
  .connect(dbURI)
  .then((res) => {
    app.listen(3000, () => {
      console.log("Server running");
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

// requests

app.get("/", (req, res) => {
  res.redirect("/todos")
});
app.use("/auth", authRoutes)
app.use("/todos", requestAuth,checkUser, todoRoutes)

// handle 404 requests
app.use((req, res) => {
  res.status(404).send("Invalid request")
})