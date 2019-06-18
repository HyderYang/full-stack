const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const users = {
    username: '123',
    password: 123
}

http.createServer((req, resp) => {
    let path = '', get = {}, post = {};

    if (req.method == 'GET') {
        let { pathname, query } = url.parse(req.url, true);

        path = pathname;
        get = query;

        complete();
    } else if (req.method == 'POST') {
        path = req.url;

        let arr = [];
        req.on('data', (buffer) => {
            arr.push(buffer);
        });
        req.on('end', () => {
            let buffer = Buffer.concat(arr);

            post = querystring.parse(buffer.toString());
            complete();
        });
    }

    function complete() {
        let {username, password} = get;
        switch (path) {
            case '/reg':

                if (users['username'] == username){
                    resp.write(JSON.stringify({error: 1, msg: '已注册'}));
                    resp.end();
                    break;
                }
                resp.write(JSON.stringify({error: 0, msg: 'ok'}));
                resp.end();
                break;
            case '/login':
                if (!users['username'] == username){
                    resp.write(JSON.stringify({error: 1, msg: 'error'}));
                    resp.end();
                    break;
                }
                resp.write(JSON.stringify({error: 0, msg: 'ok'}));
                resp.end();
                break;
            default:
                break;
        }
    };

}).listen(8989);

