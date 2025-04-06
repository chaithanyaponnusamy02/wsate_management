// db.js
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // your password
  database: "canteen"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL connected!");
});

module.exports = db;
