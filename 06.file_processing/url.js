const url = require('url');

let str = 'http://www.bing.com:80/a/b/1.html?a=12&b=1'

console.log(url.parse(str, true));

/**
 * {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.bing.com:80',
  port: '80',
  hostname: 'www.bing.com',
  hash: null,
  search: '?a=12&b=1',
  query: [Object: null prototype] { a: '12', b: '1' },
  pathname: '/a/b/1.html',
  path: '/a/b/1.html?a=12&b=1',
  href: 'http://www.bing.com:80/a/b/1.html?a=12&b=1' }
 */
