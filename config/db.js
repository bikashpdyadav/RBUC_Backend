const { Pool } = require("pg");
const dotenv = require("dotenv");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "security",
  password: "123",
  port: 5432,
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connected successfully!");
    client.release();
  } catch (err) {
    console.error("Error connecting to the database:", err.stack);
  }
};

module.exports = { pool, connectDB };
