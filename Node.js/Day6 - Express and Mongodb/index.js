const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const User = require('./models/user');
require('dotenv').config()

// Right now we are using the string like this, but in future we will add it in the environments (Just to make sure security is appropriate)
const mongoURL = process.env.MONGDB_URL;

// Earlier we used to install a package called - BodyParser, but in the latest version of express, the module was included
app.use(express.json())

mongoose.connect(mongoURL, (error) => {
    if (error) {
        console.error(`There was an error connecting database, ${error}`);
    } else {
        console.log("Succefully connected to Database");
    }
})



app.get('/', (req, res) => {
    res.send("Hello!");
})


// GET list of users
app.get('/api/v1/users', (req, res) => {
    User.find().then((data) => {
        return res.status(200).json({
            message: "Succesfully fetched the data",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    })
})


// POST the user inside the database
app.post('/api/v1/users', async (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact
    }

    const user = new User(newUser);
    

    // user.save().then((data) => {
    //     // 201 --> Create new entry in database
    //     return res.status(201).json({
    //         message: "Succesfully created a user!",
    //         data
    //     })
    // }).catch((error) => {
    //     return res.status(500).json({
    //         message: "There was an error fetching the data",
    //         error
    //     })
    // })



    // USING ASYNC AND AWAIT

    try {
        const data = await user.save();
        return res.status(201).json({
            message: "Succesfully created a user!",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    }

})


// GET list of users
app.get('/api/v1/users/:id', (req, res) => {

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
})


// Put for updating the user
app.put('/api/v1/users/:id', (req, res) => {

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
})


// Deleting  the user for given id
app.delete('/api/v1/users/:id', (req, res) => {

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
})

// USED TO GET A USER  BY EMAIL, that's why we use Findone
// app.get('/api/v1/users/:email', (req, res) => {

//     const givenEmail = req.params.email;

//     // This is used to find a user based on ID
//     User.findOne({ email: givenEmail}).then((data) => {
//         return res.status(200).json({
//             message: "Succesfully fetched the data by given ID",
//             data
//         })
//     }).catch((error) => {
//         return res.status(500).json({
//             message: "There was an error fetching the data",
//             error
//         })
//     })
// })


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})
