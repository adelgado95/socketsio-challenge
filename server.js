const express = require("express");
const app = express();
const port = 8080;
const http = require("http").createServer();
const io = require("socket.io")(http);
//Listen for a client connection 
io.on("connection", (socket) => {
    //Socket is a Link to the Client 
    console.log("New Client is Connected!");
    //Here the client is connected and we can exchanged 
    socket.emit("welcome", "Hello and Welcome to the Server");
});

//Listen the HTTP Server 
http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});
