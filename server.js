// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// In-memory datastore
let items = [
  { id: 1, name: "Item One", description: "First item" },
  { id: 2, name: "Item Two", description: "Second item" },
];

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST create new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description required" });
  }
  const newItem = {
    id: items.length + 1,
    name,
    description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description required" });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE item
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted successfully" });
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
