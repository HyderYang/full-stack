/**
 * babel 基本依赖:
 *  @babel/core @babel/cli @babel/preset-env
 * npm init -y
 * 生成默认package.json
 *      添加 script
 * 
 * 添加 .babelrc 文件
 *  设置 presets
 * 
 */
let a = 10;
let b = 20;

let show = (a, b) => {
    return a + b;
};

alert(show(a, b));