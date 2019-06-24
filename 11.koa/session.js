const Koa = require('koa');
const Route = require('koa-router');
const session = require('koa-session');

const server = new Koa();
server.listen(8989);

server.keys = [
  'asdasd',
  'woier',
  'zx.cm,nv'
];

server.use(session({
  maxAge: 20 * 60 * 1000,     // 有效期
  renew: true,                // 自动刷新
}, server));

server.use(async ctx => {
  if (!ctx.session['view']){
    ctx.session['view'] = 0;
  }

  ctx.session['view']++;
  ctx.body = 'No.' + ctx.session.view;

});
