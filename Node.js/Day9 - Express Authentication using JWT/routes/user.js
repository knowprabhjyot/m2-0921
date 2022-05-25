const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById, loginUser } = require('../controller/user');

router.get('/', getUsers);

router.post('/login', loginUser);

router.get('/:id', getUserById);

router.post('/', createUser);

module.exports = router;