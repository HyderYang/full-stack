const http = require('http');
const io = require('socket.io');

const server = http.createServer((req, resp) => {


});
server.listen(8989);

const ws = io.listen(server);
ws.on('connection', (socket) => {
    // socket.emit('name', )
  socket.on('aaa', (a, b) => {
      console.log(a, b, a + b);
  });

  setInterval(() => {
    socket.emit('timer', (new Date()).getTime());
  }, 1000);
});
