const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const getUsers = async (req, res) => {
    try {
        const data = await User.find();

        return res.status(200).json({
            message: "Succesfully fetched list of User",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createUser = async (req, res) => {
    try {

        // const body = req.body;
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: encryptedPassword
        })

        const data = await user.save();

        return res.status(200).json({
            message: "Succesfully fetched list of users",
            data
            
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


const loginUser = async (req, res) => {
    const user = req.body;

    let findUser = await User.findOne({ email: user.email});

    if (findUser) {

        const matchPassword = await bcrypt.compare(user.password, findUser.password);

        if (matchPassword) {
            const token = jwt.sign({
                email: user.email
            }, process.env.SECRETKEY);
           
            return res.status(200).json({
                message: "Succesfully logged in",
                user: {
                    name: findUser.name,
                    email: findUser.email,
                    id: findUser._id
                },
                token
            })

        } else {
            return res.status(401).json({
                message: "User Unauthorized!",
            })
        }
        
        

    } else {
        return res.status(404).json({
            message: "User not found!",
            error
        })
    }
}

const getUserById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await User.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched user based on ID",
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
    getUsers,
    createUser,
    getUserById,
    loginUser
}