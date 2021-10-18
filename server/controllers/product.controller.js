const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const { body } = req;
    Product.create(body)
        .then(product => res.json({ product }) )
        .catch(err => {
            console.log(err)
            return res.status(500).json({error: err})
        })
};