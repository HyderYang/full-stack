const http = require('http');
const fs = require('fs');

const server  = http.createServer((req, resp) => {
    console.log(req.url);
    switch(req.url){
        case '/1.html':
            fs.readFile('./www' + req.url, (err, data) => {
                if(err){
                    resp.writeHeader(404);
                    resp.write('Not Found');
                    resp.ent();
                }else{
                    resp.write(data);
                    resp.end();
                }
            });
            return;
        case '/get':
            fs.readFile('./www/2.html', (err, data) => {
                if (err) {
                    resp.writeHeader(404);
                    resp.write('Not Found');
                    resp.end();
                }else{
                    resp.write(data);
                    resp.end();
                }
            })
            return;
        case '/post':
            fs.readFile('./www/3.html', (err, data) => {
                if (err) {
                    resp.writeHeader(404);
                    resp.write('Not Found');
                    resp.end();
                }else{
                    resp.write(data);
                    resp.end();
                }
            })
            return;
    }
});

server.listen(8080);