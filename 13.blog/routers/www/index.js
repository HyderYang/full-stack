const Router  = require('koa-router');

const router = new Router();

router.get('/login', async (ctx) => {
  ctx.body = '生效了'
});

module.exports=router.routes();
