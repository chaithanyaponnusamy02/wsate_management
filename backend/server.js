// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const foodRoutes = require("./routes/foodroutes");
const userRoutes = require("./routes/userroutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to MySQL-powered Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
