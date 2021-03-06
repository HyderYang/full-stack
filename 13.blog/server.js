const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-better-body');
const session = require('koa-session');
const ejs = require('koa-ejs');

const statics = require('./routers/static');
const config = require('./config');

const server = new Koa();
server.listen(8989);

// 请求体 body 中间件
server.use(body({
  uploadDir: config.UPLOAD_DIR,
}));

// session 中间件
server.keys = fs.readFileSync('.keys').toString().split('\n')
server.use(session({
  maxAge: 20 * 60 * 1000,
  renew: true,
}, server));

// 数据库
server.context.db = require('./libs/database');
// 配置
server.context.config = config;

// 渲染
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

// 路由
const router = new Router();

// 全局拦截
// router.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (e) {
//     ctx.status = 500;
//     ctx.body = 'server error'
//   }
// });
router.use('/admin', require('./routers/admin'));
router.use('/api', require('./routers/api'));
router.use('', require('./routers/www'));

// 静态文件
statics(router);

server.use(router.routes());
