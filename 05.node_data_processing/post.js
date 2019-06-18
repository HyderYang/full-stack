const http = require('http');
const url = require('url');

const server = http.createServer((req, resp) => {

    let arr = [];
    // node 两个事件
    req.on('data', (buffer) => {
        arr.push(buffer);
    });
    req.on('end', () => {
        let buffer = Buffer.concat(arr);
        console.log(buffer.toString());
    });
});

server.listen(8899);