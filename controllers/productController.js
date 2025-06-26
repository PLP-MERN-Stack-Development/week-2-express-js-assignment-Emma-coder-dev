const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../utils/customErrors');

let products = []; // In-memory product store

// Get all products with filtering and pagination
exports.getProducts = (req, res) => {
  let result = [...products];

  const { category, page = 1, limit = 10 } = req.query;

  if (category) result = result.filter(p => p.category === category);

  const start = (page - 1) * limit;
  const end = page * limit;

  res.json(result.slice(start, end));
};

// Get one product by ID
exports.getProduct = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
};

// Create a new product
exports.createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update product by ID
exports.updateProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

// Delete product by ID
exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};

// Search by product name
exports.searchProducts = (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Search term missing' });

  const matches = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(matches);
};

// Statistics (count per category)
exports.getStats = (req, res) => {
  const stats = {};
  for (const p of products) {
    stats[p.category] = (stats[p.category] || 0) + 1;
  }
  res.json(stats);
};
