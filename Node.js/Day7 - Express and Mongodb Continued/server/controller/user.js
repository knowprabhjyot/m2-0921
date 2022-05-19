const User = require('../models/user');

const getUsers = (req, res) => {
  User.find()
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully fetched the data",
        data,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "There was an error fetching the data",
        error,
      });
    });
};


const createUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact
    }

    const user = new User(newUser);
    

    user.save().then((data) => {
        // 201 --> Create new entry in database
        return res.status(201).json({
            message: "Succesfully created a user!",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
})
}


const getUserById = (req, res) => {
        const id = req.params.id;

    // This is used to find a user based on ID
    User.findById(id).then((data) => {
        return res.status(200).json({
            message: "Succesfully fetched the data by given ID",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    })
}

const updateUser = (req, res) => {
    const id = req.params.id;
        const body = req.body;
    
        // This is used to find a user based on ID
        User.findOneAndUpdate({ _id: id}, body, {
            returnOriginal: false // This makes sure return the new updated value instead of the previous value
        }).then((data) => {
            return res.status(200).json({
                message: "Succesfully updated the data by given ID",
                data
            })
        }).catch((error) => {
            return res.status(500).json({
                message: "There was an error fetching the data",
                error
            })
        })
}

const deleteUser = (req, res) => {
        const id = req.params.id;

    // This is used to find a user based on ID
    User.findOneAndDelete({ _id: id}).then((data) => {
        return res.status(200).json({
            message: "Succesfully deleted the data by given ID",
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}