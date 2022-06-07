const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const PORT = process.env.PORT || 2000;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3002",
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    // We will be writing an event which we use for joining the room after the connection
    socket.on("join_room", (data) => {
        socket.join(data.roomNumber);

        console.log(`${data.username} connected with ID ${socket.id} has joined room : ${data.roomNumber} `)
    })

    socket.on("send_message", (data) => {
        console.log('fired again');
        socket.to(data.room).emit("recieve_message", data);
    })

    socket.on("disconnect", (data) => {
        console.log("User left", data);


        // ASSIGNMENT 1 - Lets figure this out how to notify to the client that if user left
        socket.emit("left_chat", socket.id);
    })


})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
