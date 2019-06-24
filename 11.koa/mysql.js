const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const co = require('co-mysql');

const server = new Koa();
server.listen(8989);


const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'travel'
});
const db = co(conn);
server.context.db = db;

// 全局异常捕获
server.use(async (ctx, next) => {
  try {
    await next();
  } catch (e){
    ctx.body='错误';
  }
});

const router = new Router();
router.all('*', async (ctx, next) => {
  try {
    await next();
  }catch (e) {

    ctx.body = '错误 route: ' + ctx.url;
  }
});

router.get('/a', async (ctx, next) => {
  ctx.body = div.a;
});

server.use(router.routes());

