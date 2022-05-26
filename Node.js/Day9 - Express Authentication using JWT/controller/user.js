const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Add a layer of authentication
const getUsers = async (req, res) => {
    try {

        const token = req.headers?.authorization?.split(" ")[1];

        if (token) {
            
            const decodedObject = jwt.decode(token, { complete : true });
            const userEmail = decodedObject?.payload?.email;


            const findUser = await User.findOne({ email: userEmail});

            if (findUser) {
                const data = await User.find();

                return res.status(200).json({
                    message: "Succesfully fetched list of User",
                    data
                })
            } else {
                return res.status(404).json({
                    message: "This user does'nt exist",
                })
            }

            
        } else {
            return res.status(401).json({
                message: "Not Authorized or no token provided",
            })
        }
        
    } catch(error) {
        console.log(error);
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