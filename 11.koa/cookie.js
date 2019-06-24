const Koa = require('koa');
const Route = require('koa-router');

const server = new Koa();
server.listen(8989);

server.keys = [
  'asd',
  'sad',
  '234a',
];

server.use(async ctx => {
  ctx.cookies.set('user', 'yang', {
    magAge: 86400 * 1000,
    signed: true
  });
  // ctx.cookies.get();
  console.log(ctx.cookies.get('user', {
    signed: true
  }));
});
