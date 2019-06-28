const path = require('path');
const autoprefixer = require('autoprefixer');

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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  // 插件 >增强功能
  plugins: [

  ]
};
