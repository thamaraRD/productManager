const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ProductSchema = new mongoose.Schema({
    Título: {
        type: String,
        required: [true, 'Debe ingresar una palabra'],
        minlength: [2, 'La palabra no puede tener menos de 2 caracteres']
    },
    Precio: {
        type: Number,
        required: [true, 'Debe ingresar el precio'],
    },
    Descripción: {
        type: String,
        required: [true, 'La descripción debe tener al menos dos palabras']
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
ProductSchema.plugin(uniqueValidator);
module.exports = Product;