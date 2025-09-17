# Simple REST API with Express.js

## Setup Instructions
1. Clone this repository
2. Run `npm install`
3. Start the server: `npm start`
4. The API will be running at `http://localhost:3000`

## API Endpoints

- **GET /** → `Hello, World!`
- **GET /items** → Retrieve all items
- **GET /items/:id** → Retrieve single item by ID
- **POST /items** → Create new item  
   Request body:
   ```json
   {
     "name": "New Item",
     "description": "This is a new item"
   }
   ```
- **PUT /items/:id** → Update item  
- **DELETE /items/:id** → Delete item

## Example with Postman
- GET http://localhost:3000/items
- POST http://localhost:3000/items
  ```json
  {
    "name": "Book",
    "description": "A new book"
  }
  ```
