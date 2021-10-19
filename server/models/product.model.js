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
        minlength: [2, 'El Precio debe tener dos dígitos']
    },
    Descripción: {
        type: String,
        required: [true, 'El artículo debe tener una descripción'],
        minlength: [2, 'La descripción debe tener al menos 2 letras']
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
ProductSchema.plugin(uniqueValidator);
module.exports = Product;