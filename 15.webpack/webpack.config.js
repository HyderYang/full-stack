const path = require('path');

module.exports = {
  //模式
  mode: 'development', // none: 什么都不干 | production: 尽力压缩 | development: 保留必要信息 报错等

  // 入口 单文件
  entry: './src/js/2.js',
  // 入口 多文件
  // entry: {
  //   index: './src/js/1.js',
  //   admin: './src/js/2.js'
  // },

  // 输出
  output: {
    path: path.resolve(__dirname, 'build'),
    // [name] 对应entry的 key
    // filename: '[name].min.js',
    filename: 'bundle.min.js',
  },

  // 模块
  module: {
    // 规则
    rules:[
      // 每个loader最少有两项 test/use
      // 即 检测文件规则条件 根据条件检测出后 使用哪个loader 来解析
      {
        test: /\.css$/,
        // use: 'css-loader' // 解析css文件
        use: ['style-loader', 'css-loader'] // style-loader > 在页面上将css解析成style标签
        // use 顺序很重要 简单理解 数组从后往前使用loader
        // css-loader > style-loader

      }
    ]
  }
};
