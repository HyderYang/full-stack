const net = require('net');

const server = net.createServer((socket) => {
  socket.once('data', (buffer) => {
    let str = buffer.toString();
    console.log(str);
  });

  socket.on('end', () => {
    console.log('断开');
  })
});

server.listen(8989);
