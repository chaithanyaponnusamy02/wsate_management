// routes/userroutes.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "User registered successfully" });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      res.json({ message: "Login successful", user: results[0] });
    }
  );
});

module.exports = router;
