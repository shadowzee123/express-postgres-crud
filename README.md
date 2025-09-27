# Simple REST API with Express.js + PostgreSQL  

This is a simple REST API built with **Express.js** and **PostgreSQL**.  
It demonstrates basic CRUD operations and can be tested easily using Postman.

---

## 🚀 Setup Instructions  

1. **Clone this repository:**

```bash
git clone https://github.com/shadowzee123/express-postgres-crud.git
cd express-postgres-crud
Install dependencies:

bash
Copy code
npm install
Set up PostgreSQL database (pgAdmin or psql):

sql
Copy code
CREATE DATABASE testdb;

\c testdb

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL
);
Configure your database connection in db.js:

js
Copy code
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",       // your postgres username
  host: "localhost",
  database: "testdb",     // your database name
  password: "yourpassword",
  port: 5432,
});

module.exports = pool;
Run the server:

bash
Copy code
npm run start:dev
Server will run at: http://localhost:4000

📡 API Endpoints
Method	Endpoint	Description
GET	/	Hello, World! test route
GET	/items	Retrieve all items
GET	/items/:id	Retrieve a single item by ID
POST	/items	Create a new item
PUT	/items/:id	Update an item by ID
DELETE	/items/:id	Delete an item by ID

Example POST body:
json
Copy code
{
  "name": "New Item",
  "description": "This is a new item"
}
📬 Example with Postman
Get all items:
GET http://localhost:4000/items

Create an item:
POST http://localhost:4000/items
Body (JSON):

json
Copy code
{
  "name": "Book",
  "description": "A new book"
}
