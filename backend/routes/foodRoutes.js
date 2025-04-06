// routes/foodroutes.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all foods
router.get("/", (req, res) => {
  db.query("SELECT * FROM foods", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// Add food
router.post("/", (req, res) => {
  const { name, description, price } = req.body;
  db.query("INSERT INTO foods (name, description, price) VALUES (?, ?, ?)",
    [name, description, price],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Food added successfully" });
    }
  );
});

// Delete food
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM foods WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Food deleted successfully" });
  });
});

module.exports = router;
