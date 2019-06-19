const path = require('path');

let str = '/root/a/b/1.txt';

console.log(path.dirname(str));
console.log(path.extname(str));
console.log(path.basename(str));

console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'strict'));

// path.resolve 解决复杂路径逻辑字符串

console.log(__filename);
console.log(__dirname);

console.log(__dirname, '/build'); // 绝对路径
