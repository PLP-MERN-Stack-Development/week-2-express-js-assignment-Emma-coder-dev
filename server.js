const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

// Load .env variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());      // Parse JSON
app.use(logger);                 // Custom logger
app.use(auth);                   // API key check

// Routes
app.use('/api/products', productRoutes);

// Error handler (must come last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
