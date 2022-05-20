const Book = require('../models/book');

const getBooks = async (req, res) => {
    try {
        const data = await Book.find().populate({
            path: "author"
        });

        return res.status(200).json({
            message: "Succesfully fetched list of books",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createBook = async (req, res) => {
    try {

        const body = req.body;
        const book = new Book(body);
       
        const data = await book.save();

        return res.status(200).json({
            message: "Succesfully create a book for the given Author",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getBookById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await Book.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched book based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
    getBooks,
    createBook,
    getBookById
}


// Authentication
// Headers
// userID


