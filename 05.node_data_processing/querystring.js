const http = require('http');
const querystring = require('querystring');
const urlPackage = require('url');

const server = http.createServer((req, rsep) => {
    let [url, query] = req.url.split('?');

    let get = querystring.parse(query);
    console.log(url, get);

    console.log("------------------------")
    
    // let urlInfo = urlPackage.parse(req.url);
    let urlInfo = urlPackage.parse(req.url, true);
    console.log(urlInfo);
})

server.listen(8899);