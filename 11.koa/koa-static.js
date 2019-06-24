const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const server = new Koa();
server.listen(8989);

const route = new Router();
route.get('user', (ctx) => {

});

server.use(route.routes());

const staticRouter = new Router();
staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
  maxage: 60 * 86400 * 1000
}));

staticRouter.all(/\.css$/i, static('./static', {
  maxage: 86400 * 1000
}));

staticRouter.all(/(\.html|\.htm|\.shtml)$/i, static('./static', {
  maxage: 20 * 86400 * 1000
}));

// 其他文件缓存
staticRouter.all('', static('./static', {
  maxage: 30 * 86400 * 1000
}));

server.use(staticRouter.routes());
// server.use(static('./static', {
//   maxage: 86400 * 1000, // client 缓存时间
//   index: '1.html' // 默认文件
// }));


