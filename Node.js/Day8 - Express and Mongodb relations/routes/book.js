const express = require('express');
const router = express.Router();
const { getBooks, createBook, getBookById } = require('../controller/book');

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post('/', createBook);

module.exports = router;