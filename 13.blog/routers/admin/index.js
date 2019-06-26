const path = require('path');
const fs = require('await-fs');

const common = require('../../libs/common');

const Router  = require('koa-router');

const router = new Router();

router.get('/login', async (ctx) => {
  await ctx.render('admin/login', {
    HTTP_ROOT: ctx.config.HTTP_ROOT,
    errmsg: ctx.query.errmsg
  });
});

router.post('/login', async (ctx) => {
  const {HTTP_ROOT} = ctx.config;

  let {username, password} = ctx.request.fields;
  let admin = JSON.parse((await fs.readFile(
    path.resolve(__dirname, '../../admins.json')
  )).toString());

  if (!admin[username]) {
    ctx.redirect(`${HTTP_ROOT}/admin/login?errmsg=${encodeURIComponent('用户不存在')}`);
  } else if(admin[username].password !== common.md5(password)){
    ctx.redirect(`${HTTP_ROOT}/admin/login?errmsg=${encodeURIComponent('密码错误')}`);
  }else{
    ctx.session['admin'] = username;
    ctx.redirect(`${HTTP_ROOT}/admin`);
  }
});

router.all('*', async (ctx, next) => {
  const {HTTP_ROOT} = ctx.config;

  if (ctx.session['admin']) {
    await next();
  }else{
    ctx.redirect(`${HTTP_ROOT}/admin/login?errmsg=${encodeURIComponent("请先登录")}`);
  }
});

router.get('/banner', async (ctx) => {
   ctx.body = "哈哈哈";
});

module.exports=router.routes();
