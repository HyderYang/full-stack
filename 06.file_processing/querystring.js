const querystring = require('querystring');

console.log(querystring.parse('a=12&b=3'));

console.log(querystring.stringify({a: 12, b:99}));