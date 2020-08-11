const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const cors = require('cors')

app.use(cors());

const PORT = 7000;

io.on('connection', socket => {
    socket.emit("your id", socket.id);
    socket.on('send message', message => {
        io.emit('message', message)
    })
})

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})