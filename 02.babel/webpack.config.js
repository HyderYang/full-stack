// node.js的模块化
const path = require('path');

/**
 * 1. entry: 入口地址
 * 2. output: 输出
 *      1. path: 绝对路径 输出目录
 *      2. filename: 文件名
 * 3. mode: 模式
 * 4. (node)需求 加 相对路径加 "./"
 */
module.exports={
    mode: "production",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: "bundle.js"
    }
    
}