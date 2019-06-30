// 实现一个除了 push pop 方法外 还有取最小值 min 的栈

const Stack = require('./stack');

const stack = new Stack();
stack.push(10);
stack.push(13);
stack.push(8);
stack.push(9);
stack.push(13);

console.log(stack.min());
