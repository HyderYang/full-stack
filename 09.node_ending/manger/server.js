const db = require('./libs/database');
const http = require('./libs/http');

const {addRouter} = require('./libs/router');

addRouter('get', '/aaa', async (res, get, post, files) => {
  res.write('aaaaaa');
  res.end();
});

addRouter('get', '/user', async (res, get, post, files) => {
  res.write(get['a'] + get['b']);
  res.end();
});
