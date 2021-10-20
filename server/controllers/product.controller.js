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
module.exports.getAllProducts = async (req, res) => {
    try{
    const products = await Product.find();
    return res.json({ products });

    }catch(error){
        return res.status(500).json({error: err});
    }
}
module.exports.getOneProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.json({ product })
    }catch(error){
        return res.status(500).json({error: err});
    }
}
