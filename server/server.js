const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const _ = require('lodash');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Lost connection to client');
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    var outgoingMessage = _.pick(message, ['text', 'from'])
    outgoingMessage.createdAt = new Date().getTime();
    socket.emit('newMessage', outgoingMessage);
  });
});

server.listen(port, () => {
  console.log(`Chatt server listening on port ${port}`);
});
