const Koa = require('koa');
const Route = require('koa-router');
const body = require('koa-better-body');

const server = new Koa();
server.listen(8989);

const router = new Route();

server.use(body({
  uploadDir: './static/upload'
}));

server.use(async ctx => {
  console.log(ctx.request.fields);

  ctx.body = 'aaa';
});
