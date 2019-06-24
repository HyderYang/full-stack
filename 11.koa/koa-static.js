const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');

const server = new Koa();
server.listen(8989);

const route = new Router();
route.get('user', (ctx) => {

});

server.use(route.routes());

const staticsRouter = new Router();
staticsRouter.all(/(\.jpg|\.png|\.gif)$/i, statics('./static', {
  maxage: 60 * 86400 * 1000
}));

staticsRouter.all(/\.css$/i, statics('./static', {
  maxage: 86400 * 1000
}));

staticsRouter.all(/(\.html|\.htm|\.shtml)$/i, statics('./static', {
  maxage: 20 * 86400 * 1000
}));

// 其他文件缓存
staticsRouter.all('', statics('./static', {
  maxage: 30 * 86400 * 1000
}));

server.use(staticsRouter.routes());
// server.use(statics('./statics', {
//   maxage: 86400 * 1000, // client 缓存时间
//   index: '1.html' // 默认文件
// }));


