var io         = require('socket.io')();
var middleware = require('socketio-wildcard')();
 
io.use(middleware);
 
io.on('connection', function(socket) {
  socket.on('*', function(evt){
    // data: [ 'My Event', 'Hello World!' ]
    console.log(evt.data);
    socket.emit(evt.data[0],evt.data[1]);
  });
});

var port = process.argv.length > 2 ? process.argv[2]:8000; 
console.log("Listening on port: " + port);
io.listen(port);
