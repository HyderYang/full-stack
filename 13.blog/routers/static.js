const statics = require('koa-static');

module.exports = (router, options) => {
  options = options || {};
  options.image = options.image || 30;
  options.js = options.js || 1;
  options.style = options.style || 30;
  options.html = options.html || 30;
  options.other = options.other || 7;

  router.all(/((\.jpg)|(\.png)|(\.gif))$/i, statics('./static', {
    maxage: options.image * 86400 * 1000,
  }));

  router.all(/(\.css)$/i, statics('./static', {
    maxage: options.style * 86400 * 1000,
  }));

  router.all(/((\.js)|(\.jsx))$/i, statics('./static', {
    maxage: options.js * 86400 * 1000,
  }));

  router.all(/((\.html)|(\.htm))$/i, statics('./static', {
    maxage: options.html * 86400 * 1000,
  }));

  router.all('*', statics('./static', {
    maxage: options.other * 86400 * 1000,
  }));

};
