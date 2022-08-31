/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  // 模拟
  const stack = [];
  const n = pushed.length;
  let popHead = 0;
  for (let i = 0; i < n; ++i) {
    stack.push(pushed[i]);
    while (stack.at(-1) !== undefined && stack.at(-1) === popped[popHead]) {
      // 栈顶为 pop 的值，做 pop 操作
      stack.pop();
      popHead++;
    }
  }
  return stack.length === 0;
};
