// 实现后缀表达式计算
/*
 后缀表达式是中缀表达式的计算机认读形式
 中缀表达式即人类使用的算式 如:
    1 + 2
    2 + (5 - 3)
    3 + 4 * 2

 如上 中缀表达式转化为后缀表达式为:
    1 + 2 = ["1", "2", "+"]
    2 + (5 - 3) = ["2", "5", "3", "-", "+"]
    3 + 4 * 2 = ["3", "4", "2", "*", "+"]
*/

// 后缀表达式:
//    4 + 10 / 5 = ["4", "10", "5", "/", "+"] = ["4", "2", "+"](2 = 10 / 5)
//

/*
  ["4", "13", "5", "/", "+"]
  ["4", "2", "+"]
 */
const Stack = require('./stack');

function calc_exp(arr){
  var stack = new Stack();
  var sign = ['+', '-', '*', '/'];
  for (var i = 0; i < arr.length; i++) {
    if (sign.indexOf(arr[i]) >= 0) {
      let a = stack.pop();
      let b = stack.pop();
      let result = b + arr[i] + a;
      stack.push(parseInt(eval(result)).toString());
    }else{
      stack.push(arr[i]);
    }
  }
  return stack.pop();
}

console.log(calc_exp(["4", "30", "5", "/", "+"]));
console.log(calc_exp(["4", "2", "+"]));
