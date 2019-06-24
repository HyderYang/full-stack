const koa = require('koa');
const Router = require('koa-router');

const server = new koa();
server.listen(8989);

const router = new Router();

const userRouter = new Router();
const commonRouter = new Router();
const adminRouter = new Router();

commonRouter.get('/common', async (ctx, next) => {
  ctx.body = '普通用户';
});
adminRouter.get('/admin', async (ctx, next) => {
  ctx.body = '管理员';
});

userRouter.use('/c', commonRouter.routes());
userRouter.use('/a', adminRouter.routes());
router.use('/user', userRouter.routes());

server.use(router.routes());
