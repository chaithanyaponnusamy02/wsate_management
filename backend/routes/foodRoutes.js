const express = require("express");
const router = express.Router();
const db = require("../db");

// Add a new food listing
router.post("/add", (req, res) => {
  const { title, description, location, expiryDate, contact } = req.body;
  const sql = "INSERT INTO food_listings (title, description, location, expiry_date, contact) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [title, description, location, expiryDate, contact], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Food listed successfully!", id: result.insertId });
  });
});

// Get all food listings
router.get("/list", (req, res) => {
  const sql = "SELECT * FROM food_listings";
  
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
