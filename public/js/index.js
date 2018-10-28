var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'imajerk',
    text: 'Jerk here!',
    l337H4X0R: 'All your base are belong to us'
  });
});

socket.on('disconnect', function () {
  console.log('Lost connection to server');
});

socket.on('newMessage', function (message) {
  console.log('New message received', message);
});
