const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const User = require('./models/user');
const UserRoutes = require('./routes/user');
const cors = require('cors');


require('dotenv').config();

// Right now we are using the string like this, but in future we will add it in the environments (Just to make sure security is appropriate)
const mongoURL = process.env.MONGDB_URL;

// Earlier we used to install a package called - BodyParser, but in the latest version of express, the module was included
app.use(express.json())

// Cors middleware asks the browser to allow resource sharing from different PORT Numbers
app.use(cors());

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


app.use('/api/v1/users', UserRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})



// MVC Pattern - Model, View, Controller


// Models
// We will add our models and schemas here inside this folder


// Routes 
// We will have our endpoints or routes here in this folder


// Controller
// We will write our business logic here or database layer here