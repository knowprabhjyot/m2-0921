const express = require('express');
const router = express.Router();
const { getAuthors, createAuthor, getAuthorById } = require('../controller/author');

router.get('/', getAuthors);

router.get('/:id', getAuthorById);

router.post('/', createAuthor);

module.exports = router;