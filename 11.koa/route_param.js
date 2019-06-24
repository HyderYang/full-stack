const Koa = require('koa');
const Route = require('koa-router');

const server = new Koa();
server.listen(8989);

const router = new Route();

router.get('/news/:id', async ctx=> {
  console.log(ctx.params);
  let {id} = ctx.params;
  console.log(id);

  // querystring
  console.log(ctx.query);
  console.log(ctx);
  ctx.body = '测试';
});

server.use(router.routes());
