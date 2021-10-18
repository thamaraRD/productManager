const { createProduct } = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', createProduct);
}