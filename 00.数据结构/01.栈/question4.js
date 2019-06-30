// 中缀表达式 转 后缀表达式
const Stack = require('./stack');

var priority_level = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};
function infix_exp_2_postfix_exp(arr){
  var stack = new Stack();
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (!isNaN(item)) {
      // 数字直接写入
      res.push(item);

    } else if (item === '(') {
      // 左括号直接入栈
      stack.push(item);

    } else if (item === ')') {
      // 右括号 将栈中符号写入 直到遇到 左括号 并推出左括号
      while (stack.top() !== '('){
        res.push(stack.pop());
      }
      stack.pop();

    } else{
      // 如果是符号
      // 栈中不是空 且 不是括号 且 栈顶符号优先级大于等于当前符号
      //    则一直弹栈 写入
      // 最后 将当前符号入栈
      while(
        !stack.isEmpty()
        && ['+', '-', '*', '/'].indexOf(stack.top()) >= 0
        && priority_level[stack.top()] >= priority_level[item]
        ){
        res.push(stack.pop());
      }
      stack.push(item);
    }
  }

  // 最后 将栈中符号弹栈 写入
  while (!stack.isEmpty()){
    res.push(stack.pop());
  }

  return res;
}

console.log(infix_exp_2_postfix_exp(["12", "+", "3"]));
console.log(infix_exp_2_postfix_exp(["12", "-", "3", "+", "2"]));
var exp = "(1+(4+5+3)-3)+(9+8)".split('');
console.log(infix_exp_2_postfix_exp(exp));
var exp = "(1+(4+5+3)/4-3)+(6+8)*3".split('');
console.log(infix_exp_2_postfix_exp(exp));
