const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requred: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema);

module.exports = User;