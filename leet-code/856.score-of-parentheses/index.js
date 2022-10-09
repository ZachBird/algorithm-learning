/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = function (s) {
  const stack = [0];
  for (const cur of s) {
    if (cur === '(') {
      stack.push(0);
    } else {
      const top = stack.pop();
      const curScore = Math.max(top * 2, 1);
      stack.push(stack.pop() + curScore);
    }
  }
  return stack.pop();
};
