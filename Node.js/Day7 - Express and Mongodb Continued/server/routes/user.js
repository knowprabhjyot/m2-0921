const express = require("express");
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/user'); 

// GET list of users
router.get('/', getUsers);

// GET user based on ID
router.get('/:id', getUserById);

// Create a user
router.post('/', createUser);


// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);


module.exports = router;
