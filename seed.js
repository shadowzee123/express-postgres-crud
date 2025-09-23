// seed.js
const pool = require("./db");

async function seed() {
  try {
    // Drop table if it exists
    await pool.query("DROP TABLE IF EXISTS users");

    // Create users table
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INTEGER
      )
    `);

    // Insert sample users
    await pool.query(`
      INSERT INTO users (name, email, age)
      VALUES
      ('John Doe', 'john@example.com', 25),
      ('Jane Smith', 'jane@example.com', 30),
      ('Alice Johnson', 'alice@example.com', 28)
    `);

    console.log("✅ Users table seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
}

seed();
