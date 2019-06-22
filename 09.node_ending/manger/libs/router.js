const router = {};

// 添加路由
const addRouter = (method, url, cb) => {
  method = method.toLowerCase();
  url = url.toLowerCase();
  router[method] = router[method] || {};
  router[method][url] = cb
};

// 查找路由
const findRouter = (method, url) => {
  method = method.toLowerCase();
  url = url.toLowerCase();

  if (!router[method] || !router[method][url]) {
    return null;
  } else {
    return router[method][url];
  }
};

module.exports = {
  addRouter,
  findRouter
};
