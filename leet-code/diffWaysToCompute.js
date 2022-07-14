/**
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = function (expression) {
  // 拆分表达式
  const ops = [];
  let temp = 0;
  for (let i = 0; i < expression.length; ++i) {
    if (isNaN(expression[i])) {
      ops.push(temp);
      temp = 0;
      ops.push(expression[i]);
    } else {
      const curDigit = parseInt(expression[i], 10);
      temp = temp * 10 + curDigit;
    }
  }
  ops.push(temp);
  console.log(ops);
  // dfs
  // [2, '*', 3, '-', 4, '*', 5];
  function dfs (start, end) {
    // 递归终止
    if (start === end) {
      return [ops[start]];
    }
    const result = [];
    for (let i = start; i < end; ++i) {
      // console.log('**********', start);

      // 走到符号位
      if (i % 2 !== 0) {
        console.log('----start----', start);
        const left = dfs(start, i - 1);
        console.log('left: ', left);
        const right = dfs(i + 1, end);
        console.log('right: ', right);
        for (let j = 0; j < left.length; ++j) {
          for (let k = 0; k < right.length; ++k) {
            if (ops[i] === '+') {
              result.push(left[j] + right[k]);
            } else if (ops[i] === '-') {
              result.push(left[j] - right[k]);
            } else if (ops[i] === '*') {
              result.push(left[j] * right[k]);
            }
          }
        }
        console.log('----end----', end);
      }
    }
    // console.log('**********', end);
    console.log('result', result);
    return result;
  }

  return dfs(0, ops.length - 1);
};

diffWaysToCompute('2*3-4*5');
