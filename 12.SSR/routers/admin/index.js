const path = require('path');

const Router  = require('koa-router');
const fs = require('await-fs');

const router = new Router();

router.get('/login', async (ctx) => {
  await ctx.render('admin/login');
});

router.post('/login', async (ctx) => {
  let {user, pass} = ctx.request.fields;
  let admin = JSON.parse((await fs.readFile(
    path.resolve(__dirname, '../../admins.json')
  )).toString());

  ctx.body = admin;
});

module.exports=router.routes();
