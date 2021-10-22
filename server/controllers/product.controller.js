const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  const { body } = req;
  console.log(body);
  Product.create(body)
    .then((product) => res.json({ product }))
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};
module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.json({ product });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.deletedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.deleteOne({ _id: id });
    return res.json({
      message: "Se ha borrado producto exitosamente",
      product: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updateTheProduct = await Product.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res.json({
      message: "Se actualizó el producto correctamente",
      updateTheProduct,
    });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
