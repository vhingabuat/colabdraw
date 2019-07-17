// Import modules
const express = require('express');
const socket = require('socket.io');

// Initialize Express
const app = express();

// Defining the PORT
const PORT = process.env.PORT || 5000;

// Listen to PORT
const server = app.listen(PORT, "0.0.0.0", () => console.log(`Console running on port ${PORT}`));

// Directory for views
app.use(express.static('public'));

// Create a new socket
const io = socket(server);

// Check new connection on socket
io.on('connection', (socket) => {
    console.log('Socket Connection established', socket.id);
    // Data sent from Client
    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    })
})