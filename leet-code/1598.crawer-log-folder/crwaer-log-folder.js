/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
  // 栈模拟，且只存进入的文件夹
  const stack = [];
  for (const ops of logs) {
    if (ops === '../') {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else if (ops === './') {
      continue;
    } else {
      stack.push(ops);
    }
  }
  return stack.length;
};

console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']));
// expect: 3
