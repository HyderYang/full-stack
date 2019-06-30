// 判断字符串括号是否合法
// 合法 括号成对出现
// 不合法 考好不配对
/*
  qwoi(ds(er(fd)er)qweqw)
  ()()abase(sadf(sdf)sadf)fds)()
  ()()abase(sadf(sdf)sadf)fds)()
  jami(d's(ada(safd)fs)sadf)sdf))
 */
const Stack = require('./stack');

function is_legal_brackets(string){
  var stack = new Stack();
  for (var i = 0; i < string.length; i++) {
    var item = string[i];
    if (item === '(') {
      stack.push(item);
    } else {
      if (stack.isEmpty()) {
        return false
      }else{
        stack.pop();
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
  return false
}

console.log(is_legal_brackets("()"));
console.log(is_legal_brackets("()))"));
console.log(is_legal_brackets("(()))"));
