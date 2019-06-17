/**
 * 
 * 正则表达式
 *      \d 数字
 * 
 *      g 全局匹配
 * 
 *      + 多个
 * 
 *      
 * 
 */

 let a = "asdflkj;lkj234342131ksljdfj";
 let reg = /\d+/g

 console.log(a.match(reg));
 // 4 