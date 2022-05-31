const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById, loginUser } = require('../controller/user');
const validateToken = require('../middleware/auth');


// Middleware validate Token to make sure the request is authorized
router.get('/', validateToken, getUsers);

router.post('/login', loginUser);

router.get('/:id',validateToken,  getUserById);

router.post('/', createUser);

module.exports = router;