const path = require('path');
const fs = require('await-fs');

const common = require('../../libs/common');

const Router  = require('koa-router');
const router = new Router();

const table='banner_table';


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


router.get('/', async ctx=>{
  const {HTTP_ROOT}=ctx.config;

  ctx.redirect(`${HTTP_ROOT}/admin/banner`);
});


const fields=[
  {title: '标题', name: 'title', type: 'text'},
  {title: '图片', name: 'src', type: 'file'},
  {title: '链接', name: 'href', type: 'text'},
  {title: '序号', name: 'serial', type: 'number'},
];
router.get('/banner', async ctx=>{
  const {HTTP_ROOT}=ctx.config;

  let datas=await ctx.db.query(`SELECT * FROM ${table}`);

  await ctx.render('admin/table', {
    HTTP_ROOT,
    type: 'view',
    datas,
    action: `${HTTP_ROOT}/admin/banner`,
    fields
  })
});


router.post('/banner', async ctx=>{
  let {HTTP_ROOT}=ctx.config;
  let {title, src, href, serial}=ctx.request.fields;
  src=path.basename(src[0].path);

  await ctx.db.query('INSERT INTO banner_table (title, src, href, serial) VALUES(?,?,?,?)', [
    title, src, href, serial
  ]);

  ctx.redirect(`${HTTP_ROOT}/admin/banner`);
});


router.get('/banner/delete/:id/', async ctx=>{
  let {id}=ctx.params;
  let {UPLOAD_DIR, HTTP_ROOT}=ctx.config;

  let data=await ctx.db.query('SELECT * FROM banner_table WHERE ID=?', [id]);
  ctx.assert(data.length, 400, 'no data');

  let row=data[0];

  await common.unlink(path.resolve(UPLOAD_DIR, row.src));
  await ctx.db.query('DELETE FROM banner_table WHERE ID=?', [id]);

  ctx.redirect(`${HTTP_ROOT}/admin/banner`);
});


router.get('/banner/modify/:id/', async ctx=>{
  let {id}=ctx.params;
  const {HTTP_ROOT}=ctx.config;

  console.log(id);

  let data=await ctx.db.query('SELECT * FROM banner_table WHERE ID=?', [id]);
  ctx.assert(data.length, 400, 'no data');

  let row=data[0];

  await ctx.render('admin/table', {
    HTTP_ROOT,
    type: 'modify',
    old_data: row,
    fields,
    action: `${HTTP_ROOT}/banner/modify/${id}`
  });
});


router.post('/banner/modify/:id/', async ctx=>{
  ctx.body='a';
});

module.exports=router.routes();
