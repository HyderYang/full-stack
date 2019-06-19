const http = require('http');

http.createServer((req, resp) => {

    let arr = [];
    req.on('data', (buffer) => {
        arr.push(buffer);
    });

    req.on('end', () => {
        let buffer = Buffer.connat(arr);

        console.log(buffer.toString());
    });

}).listen(8989);
