const { createProduct, getAllProducts, getOneProduct, deletedProduct, updateProduct } = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', createProduct);
    app.get('/api/products', getAllProducts);
    app.get('/api/products/:id', getOneProduct);
    app.delete('/api/products/:id', deletedProduct);
    app.put('/api/products/:id', updateProduct);
}