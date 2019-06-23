const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
server.listen(8989);

server.use(cookieParser(
  'secure keys'
));

server.get('/a', (req, res) => {
    console.log('cookie:', req.cookies);
    console.log('signed:', req.signedCookies);

    res.cookie('amount', 100, {
      // httpOnly: true,
      maxAge: 14 * 86400 * 1000,
      // secure: true,  https协议
      signed: true  // 签名验证
    });

    res.send('ok');
});
