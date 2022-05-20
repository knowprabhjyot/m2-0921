const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requred: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;