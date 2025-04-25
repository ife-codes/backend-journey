// initialization
const express = require("express");
const app = express();

// module imports
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors")

// local imports
const authRoutes = require("./routes/authRoutes");
const linkRoutes = require("./routes/linkRoutes");
const requireAuth = require("./middleware/requireAuth")

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

// starting the server
app.listen(3000, () => {
  console.log("Server is now running!");
  console.log("Hope you get no bugs!");
});

// request
app.use("/auth", authRoutes);
app.use("/links", requireAuth, linkRoutes);

app.use((req, res) => {
  res.status(401).json({ msg: "Invalid request" });
});
