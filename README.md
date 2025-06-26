# Express.js RESTful API – Product Management

This project is a RESTful API built with Express.js to manage a product catalog. It includes CRUD operations, middleware for logging, authentication, and validation, as well as error handling and advanced features like filtering, pagination, search, and statistics.

## How to Run the Server

1. Install dependencies:
   npm install

2. Create a .env file using the provided .env.example:
   PORT=3000
   API_KEY=123456

3. Start the server:
   npm start

## Authentication

All routes require an API key to be included in the headers:

x-api-key: 123456

## API Endpoints

### GET /api/products
Fetch all products.
- Supports query parameters:
  - category (e.g., /api/products?category=Electronics)
  - page (default: 1)
  - limit (default: 10)

### GET /api/products/:id
Fetch a specific product by ID.

### POST /api/products
Create a new product.

Headers:
x-api-key: 123456

Body (JSON):
{
  "name": "Laptop",
  "description": "Fast and portable",
  "price": 1000,
  "category": "Electronics",
  "inStock": true
}

### PUT /api/products/:id
Update an existing product by ID.

Headers:
x-api-key: 123456

Body (JSON):
{
  "price": 950,
  "inStock": false
}

### DELETE /api/products/:id
Delete a product by ID.

Headers:
x-api-key: 123456

### GET /api/products/search?name=phone
Search for products by name (case-insensitive).

### GET /api/products/stats
Get a count of products grouped by category.

## Error Handling

All errors are returned in JSON format.

Examples:
- 400 Bad Request: Missing or invalid fields
- 401 Unauthorized: Invalid API key
- 404 Not Found: Product not found
- 500 Internal Server Error: Unexpected failure

## .env.example

PORT=3000  
API_KEY=123456

## Tools Used

- Node.js
- Express.js
- uuid
- dotenv
- body-parser
- Postman or curl for testing

## Project Structure

controllers/         → Route logic  
routes/              → API endpoints  
middleware/          → Custom middleware  
utils/               → Custom error classes  
server.js            → Main server file  
.env.example         → Sample environment config  
README.md            → Project documentation

## Author

Neema Kageni – Week 2 Express.js API Assignment
