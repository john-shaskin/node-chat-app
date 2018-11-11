const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const _ = require('lodash');

const {generateMessage} = require('./utils/message');
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

  socket.emit('newMessage', generateMessage('Moonman', 'Welcome to the party'));
  socket.broadcast.emit('newMessage', generateMessage('Moonman', 'New victim joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    var outgoingMessage = generateMessage(message.from, message.text);
    io.emit('newMessage', outgoingMessage);
    callback('Got your message -Love, the server');
    // socket.broadcast.emit('newMessage', outgoingMessage)
  });
});

server.listen(port, () => {
  console.log(`Chatt server listening on port ${port}`);
});
