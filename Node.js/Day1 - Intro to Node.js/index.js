// Server 
// A server is a computer only which has good computation power (RAM, MEMORY, SSD)

// Macbook can also behave like a server

const http = require('http');
const PORT = 5000;

// Callback
// A callback is a function which is passed as a parameter to another function

// Request is something that the client/browser is sending
// Response is something that we want to send from the server to the client
const server = http.createServer((request, response) => {
    if (request.url === "/") {

        response.setHeader('Content-type', 'text/html');
        // This bydefault is being sent to the client as a normal string not a html code
        response.write('<ul><li>Item1</l1><li>Item2</l1><li>Item3</l1></ul>');
        response.end();
    } else if (request.url === "/home") {
        response.write('This is a home page!');
        response.end();
    }
})

// server.listen(PORT, (request, response) => {
//     console.log('Server running!');
// });

server.listen(PORT, (request, response) => {
    console.log(`Server  ${PORT}`);
})

// Nodemon




// make a node project
// Create a node server
// if the user requests a url like - http://localhost:5000/dogs --> send a dog image to the browser
// if the user requests a url like - http://localhost:5000/cats --> Send a cat image to the browser