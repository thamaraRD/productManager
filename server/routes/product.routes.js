const { createProduct, getAllProducts, getOneProduct } = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', createProduct);
    app.get('/api/products', getAllProducts);
    app.get('/api/products/:id', getOneProduct);
}