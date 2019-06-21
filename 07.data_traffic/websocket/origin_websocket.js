const net = require('net');
const crypto = require('crypto');

function parseHeader(str){
  let arr = str.split('\r\n').filter((line) => {
      return line;
  });

  arr.shift();
  let header = {};
  arr.forEach((line) => {
      let [name, value] = line.split(': ');
      name = name.replace(/^\s+|\s+$/g, '').toLowerCase();
      value = value.replace(/^\s+|\s+$/g, '');
      header[name] = value;
  });
  return header;
}

const server = net.createServer((socket) => {
  socket.once('data', (buffer) => {
    let str = buffer.toString();
    let headerArr = parseHeader(str);

    if (headerArr['upgrade'] !== 'websocket') {

      console.log('no upgrade');
      socket.end();

    } else if (headerArr['sec-websocket-version'] !== '13'){

      console.log('not version 13');
      socket.end();

    } else {

      let key = headerArr['sec-websocket-key'];
      let uuid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
      let hash = crypto.createHash('sha1');

      hash.update(key + uuid);
      const finalKey = hash.digest('base64');

      let writeHeader = 'HTTP/1.1 101 Switching Protocols\r\n'
        + 'Upgrade: websocket\r\n'
        + 'Connection: upgrade\r\n'
        + 'Sec-Websocket-Accept: ' + finalKey + '\r\n\r\n';
      socket.write(writeHeader);
    }
  });

  socket.on('end', () => {
    console.log('断开');
  })
});

server.listen(8989);
