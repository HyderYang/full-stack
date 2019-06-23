const koa = require('koa');
const Router = require('koa-router');

const server = new koa();
server.listen(8989);

const router = new Router();

router.get('/a', async (ctx, next) => {
  ctx.body = 'aaaa';
});

server.use(router.routes());
