const express = require('express');
const body = require('body-parser');
const querystring = require('querystring');
const cookiParser = require('cookie-parser');
const multer = require('multer');

const server = express();
server.listen(8989);

server.use(body.urlencoded({
  extended: false
}));

let obj = multer({dest: './static'});
server.use(obj.any());

// server.use((req, res, next) => {
//   let arr = [];
//   req.on('data', buffer => {
//     arr.push(buffer);
//   });
//
//   req.on('end', () => {
//       req.body = querystring.parse(Buffer.concat(arr).toString());
//   });
//   next();
// });

server.get('/a', (req, res, next) => {
  // 解析get数据
  console.log(req.query);
  next();
});

server.get('/a', (req, res, next) => {
  // res.send('aaa');
  console.log('bbb')
});

server.post('/reg', (req, res) => {
  console.log(req.body);
  console.log(req.files);
});

server.use(express.static('./static/'));
