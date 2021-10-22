const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar una palabra'],
        minlength: [2, 'La palabra no puede tener menos de 2 caracteres']
    },
    price: {
        type: Number,
        required: [true, 'Debe ingresar el precio'],
        minlength: [2, 'El Precio debe tener dos dígitos']
    },
    description: {
        type: String,
        required: [true, 'El artículo debe tener una descripción'],
        minlength: [5, 'La descripción debe tener al menos 5 letras']
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
ProductSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });
module.exports = Product;