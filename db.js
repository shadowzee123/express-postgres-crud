// db.js
const { Pool } = require("pg");

// Create a pool to connect to PostgreSQL
const pool = new Pool({
  user: "postgres",       // your postgres username
  host: "localhost",      // database host
  database: "testdb",     // database name
  password: "shadow",     // your postgres password
  port: 5432,             // default postgres port
});

// Export pool for use in other files
module.exports = pool;
