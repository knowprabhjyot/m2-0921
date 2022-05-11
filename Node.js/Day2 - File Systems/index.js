const http = require('http');
const fs = require('fs');
const PORT = 5000;


// Status Code is a way to determine the type of response
// 200 --> Give a succesfull response
// 401 --> This is an error response for not authorized

const server = http.createServer((request, response) => {
    if (request.url === "/") {
       fs.rename("index.html", 'home.html', (error) => {

           if (error) {
               throw error;
           }
        //    response.writeHead(404, { 'Content-type': 'text/html'});
        //    response.write(data);
           console.log("File Renamed!");
           response.write("File Renamed");
           return response.end();
       })
    }
})

server.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`);
})

// Write File all of the data is replaced
// Append File, concatenates the previous data with the incoming data


// FRONTEND
// UI Design + UI LOGIC
// Firebase

// // BACKEND
// API 
// Chatting Application
// Postgres , MongoDB


// FRONTEND + BACKEND = FULL STACK APPLICATION

// HEROKU
// AWS


// Before React

// INDEX.html + JS  + CSS


// Node.js was used to serve these static files and send to the client/browser
