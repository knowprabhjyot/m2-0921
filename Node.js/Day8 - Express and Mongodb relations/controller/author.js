const Author = require('../models/author');


const getAuthors = async (req, res) => {
    try {
        const data = await Author.find();

        return res.status(200).json({
            message: "Succesfully fetched list of authors",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createAuthor = async (req, res) => {
    try {

        const body = req.body;
        const author = new Author(body);

        const data = await author.save();

        return res.status(200).json({
            message: "Succesfully fetched list of authors",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getAuthorById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await Author.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched author based on ID",
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
    getAuthors,
    createAuthor,
    getAuthorById
}