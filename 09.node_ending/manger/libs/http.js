const http = require('http');
const url = require('url');
const querystring = require('querystring');
const zlib = require('zlib');
const fs = require('fs');
const {Form} = require('multiparty');

const {HTTP_ROOT, HTTP_PORT, HTTP_UPLOAD} = require('../config');
const router = require('./router');

http.createServer((req, res) => {
  // 解析请求url
  let {pathname, query} = url.parse(req.url, true);

  // 判断 GET/POST 请求
  if (req.method === 'POST'){

    // 表单POST
    if (req.headers['content-type'].startsWith('application/x-www-form-urlencoded')) {
      const form = [];
      req.on('data', (buffer) => {
        form.push(buffer);
      });

      req.on('end', () => {
        let postData = querystring.parse(Buffer.concat(form).toString());
        handle(req.method, pathname, query, postData, {});
      })
    } else {
      // 上传POST
      const form = new Form({
        uploadDir: HTTP_UPLOAD,

      });
      form.parse(req);

      const postData = {};
      const files = {};

      form.on('field', (name, value) => {
        postData[name] = value;
      });
      form.on('file', (name, file) => {
        files[name] = file;
      });
      form.on('error', (err) => {
        console.log(err)
      });
      form.on('close', () => {
        handle(req.method, pathname, query, postData, files);
      });

    }
  }else{
    // GET 请求
    handle(req.method, pathname, query, {}, {});
  }

  async function handle(method, url, get, post, files){
    const findRouter = router.findRouter(method, url);

    if (!findRouter) {
      // 文件请求
      const filepath = HTTP_ROOT + pathname;
      fs.stat(filepath, (err, stat) => {
        if (err) {
          res.writeHead(404);
          res.write('not fount');
          res.end();
        } else {
          const rs = fs.createReadStream(filepath);
          const gz = zlib.createGzip();

          rs.on('error', (err) => {
            console.log('upload file error');
            console.log('err');
          });

          res.setHeader('content-encoding', 'gzip');
          rs.pipe(gz).pipe(res);
        }
      })
    } else {
      console.log(get, post, files);
      try {
        await findRouter(res ,get, post, files);
      } catch (e) {
        res.writeHead(500);
        res.write('Internal Server Error');
        res.end();
      }
    }
  }
}).listen(HTTP_PORT);

console.log('server started at ' + HTTP_PORT);
