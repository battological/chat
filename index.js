//*** Configuration ***/
var app = require('express')();
var http = require('http').Server(app);


// Sockets
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});


// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});


/*** Start ***/
http.listen(3000, function() {
  console.log('listening on *:3000');
});
