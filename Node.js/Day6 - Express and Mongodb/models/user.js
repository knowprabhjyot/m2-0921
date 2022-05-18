const mongoose = require('mongoose');


// User schema as a blue print in how the data would look like
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String
    }
})


// We wrap the schema we created in a model
const User = mongoose.model("UserSchema", UserSchema);


// Exporting User Model so that other files can use it
module.exports = User;