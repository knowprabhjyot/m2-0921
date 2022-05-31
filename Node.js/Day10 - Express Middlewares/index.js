const express = require('express');
const app = express();
const PORT = 1000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoutes = require('./routes/user');
const morgan = require('morgan');

require('dotenv').config();

const mongoURL = process.env.MONGDB_URL;


// We have app.use for introducing middlewares
app.use(express.json())

// Cors middleware asks the browser to allow resource sharing from different PORT Numbers
app.use(cors());


// Morgan as a logger to see incoming requests
app.use(morgan('dev'));


// // First Middle ware
// app.use((req, res, next) => {
//     console.log('Incoming request', req.url);
//     next();
// })

// // Second Middle ware 
// app.use((req, res, next) => {
//     console.log('Terminating request');
//     res.send('Thankyou');
//     next();
// })

// Three Middleware
// app.use((req, res, next) => {
//     console.log("I won't be calleed");
// })

function logger(req, res, next) {
    console.log('Incoming requests');
    next();
}

mongoose.connect(mongoURL, (error) => {
    if (error) {
        console.error(`There was an error connecting database, ${error}`);
    } else {
        console.log("Succefully connected to Database");
    }
})

app.use('/api/v1/users', logger, UserRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})

// I sign up in a website
// username/email - prabh@gmail.com
// password - helloworld

// We always save password in encrypted format so that no one knows what the password is



                
