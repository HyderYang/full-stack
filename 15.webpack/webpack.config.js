const path = require('path');

module.exports = {
  mode: 'development', // none: 什么都不干 | production: 尽力压缩 | development: 保留必要信息 报错等
  // 入口 单文件
  // entry: './src/js/1',
  // 入口 多文件
  entry: {
    index: './src/js/1.js',
    admin: './src/js/2.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // [name] 对应entry的 key
    filename: '[name].min.js',
  }
};
