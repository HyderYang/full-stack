const Koa = require('koa');
const ejs = require('koa-ejs');
const path = require('path');

const server = new Koa();
server.listen(8989);


ejs(server, {
  root: path.resolve(__dirname, 'static'),
  layout: false, //必要 建议 false
  viewExt: 'ejs',
  cache: false,
  debug: false, // true 乱
});

server.use(async ctx => {
  await ctx.render('1', {
    arr: [12, 23, 43, 123, 43],
    name: 123
  })
});
