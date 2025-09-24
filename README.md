# Simple REST API with Express.js

## Setup Instructions
1. Clone this repository
2. Run `npm install`
3. Start the server: `npm start`
4. The API will be running at `http://localhost:4000`

## API Endpoints

- **GET /** → `Hello, World!`
- **GET /users** → Retrieve all users
- **GET /users/:id** → Retrieve single user by ID
- **POST /users** → Create new user  
   Request body:
   ```json
   {
     "name": "New User",
     "description": "This is a new user"
   }
   ```
- **PUT /users/:id** → Update user  
- **DELETE /users/:id** → Delete user

## Example with Postman
- GET http://localhost:4000/users
- POST http://localhost:4000/users
  ```json
  {
    "name": "Book",
    "description": "A new book"
  }
  ```
