const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
}, {
    timestamps: true
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;


// Relations
// Book and Author Relations


// One to One
// One author --> One book
// One book --> One author


// One to Many
// One author --> Many books
// One Book --> One Author

// Many to one
// Many authors --> One book

// Many to Many



// Lets say you are working on the UI

// GRID format of books



// Pagination
// Limit


// Today's assignment is to link the current application with the Frontend


// You have to add image as string inside the model of books