const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoutes = require('./routes/user');

require('dotenv').config();

const mongoURL = process.env.MONGDB_URL;


// We have app.use for introducing middlewares
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

app.use('/api/v1/users', UserRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})

// I sign up in a website
// username/email - prabh@gmail.com
// password - helloworld

// We always save password in encrypted format so that no one knows what the password is



