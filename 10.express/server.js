const express = require('express');

const server = express();
server.listen(8989);

server.get('/a', (req, res, next) => {
   // res.send('aaa');
  // res.send({a: 'a'});
  console.log('aaa');
  next();
});

server.get('/a', (req, res, next) => {
  // res.send('aaa');
  console.log('bbb')
});
