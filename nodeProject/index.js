// const express = require('express');

// Hyper text transfer protocol
const http = require('http');
const callMe = require('./func');

const server = http.createServer(function(req, res) {

    if (req.url === '/student') {
        callMe();
        res.write('Hello Student');
        res.end();
    }

   if (req.url === '/') {
        // Sending the response to '/'
    res.write('Hello world');
    res.end();
   }
})


server.listen(5000);



// First step is importing a package that runs a server http, express
// Second step is creating a server
// Third step is running/listening the server
