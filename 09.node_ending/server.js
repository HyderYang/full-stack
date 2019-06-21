const http = require('http');
const zlib = require('zlib');
const url = require('url');
const fs = require('fs');

http.createServer((req, resp) => {
  let {pathname} = url.parse(req.url, true);
  let rs = fs.createReadStream(pathname.slice(1));

  rs.on('error', (error) => {
      resp.setHeader('content-encoding', '');
      resp.writeHead(404);
      resp.write('not found');
      console.log(error);
      resp.end();
  });

  resp.setHeader('content-encoding', 'gzip');
  rs.pipe(zlib.createGzip()).pipe(resp);
}).listen(8989);
