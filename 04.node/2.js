/**
 * node.js 服务器
 *  中间层
 *  工具
 * 
 * 1. 安装包 npm i 包名
 * 2. 引入包
 * 3. 使用包
 *  
 * 
 * 监听: 等待客户端连接
 * 端口: 数字
 */

const http = require('http');

const server = http.createServer(() => {
    console.log('请求来了')
});

server.listen(8090);
