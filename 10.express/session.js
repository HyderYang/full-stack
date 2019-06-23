const express = require('express');
const cookieSession = require('cookie-session');

const server = express();
server.listen(8989);

server.use(cookieSession({
  // 循环密钥
  keys: [
    '1',
    '2',
  ],
  maxAge: 20 * 60 * 14,
}));

server.get('/a', (req, res) => {
  console.log(req.session);
  if(!req.session['view']){
    req.session['view'] = 1;
  }else{
    req.session['view']++;
  }
  res.send('ok');
});
