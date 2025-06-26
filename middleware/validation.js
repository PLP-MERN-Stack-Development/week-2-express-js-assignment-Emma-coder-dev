module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  // Check for missing fields
  if (!name || !description || price == null || !category || inStock == null) {
    return res.status(400).json({ error: 'Missing required product fields' });
  }

  // Check for correct data types
  if (typeof price !== 'number' || typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'Invalid data types: price should be a number and inStock should be a boolean' });
  }

  next();
};
