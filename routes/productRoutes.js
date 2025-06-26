const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getStats
} = require('../controllers/productController');

const validateProduct = require('../middleware/validation');

// Routes
router.get('/', getProducts);                 // List all
router.get('/search', searchProducts);        // Search by name
router.get('/stats', getStats);               // Stats by category
router.get('/:id', getProduct);               // Get by ID
router.post('/', validateProduct, createProduct);  // Create
router.put('/:id', validateProduct, updateProduct); // Update
router.delete('/:id', deleteProduct);         // Delete

module.exports = router;
