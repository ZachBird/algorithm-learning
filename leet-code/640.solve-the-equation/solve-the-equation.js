/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = function (equation) {
  // 拆解表达式
  const expression = equation.split('=');
  const left = expression[0];
  const right = expression[1];
  const [c1, s1] = handleExpression(left);
  const [c2, s2] = handleExpression(right);
  console.log(c1, s1);
  console.log(c2, s2);
  if (c1 - c2 === 0) {
    if (s2 - s1 !== 0) {
      return 'No solution';
    }
    return 'Infinite solutions';
  } else {
    return `x=${(s2 - s1) / (c1 - c2)}`;
  }
};

function handleExpression (expression) {
  // 处理两边表达式，记录相关系数
  // 处理参数
  let sign = '+';
  // 第几位数值
  let digtal = 0;
  let curNum = 0;
  let sum = 0;
  // 处理未知数 x
  let coefficient = 0;
  for (let i = 0; i < expression.length; ++i) {
    const curStr = expression[i];
    if (curStr === '-' || curStr === '+') {
      // 处理符号位时，证明要计算上一段表达式的值
      if (expression[i - 1] === 'x') {
        coefficient += parseInt(sign + curNum, 10);
      } else {
        sum += parseInt(sign + curNum, 10);
      }
      digtal = 0;
      curNum = 0;
      sign = curStr;
      continue;
    } else if (curStr === 'x') {
      curNum = curNum === 0 ? 1 : curNum;
      // 处理 "0x = 0" 的 case
      if (expression[i - 1] === '0') curNum = 0;
      if (i === expression.length - 1) {
        coefficient += parseInt(sign + curNum, 10);
      }
      continue;
    } else {
      // 所有可能情况排除后，这里是遇到数值位
      curNum = curNum * (10 ^ digtal) + parseInt(curStr, 10);
      if (i === expression.length - 1) {
        sum += parseInt(sign + curNum, 10);
      }
      continue;
    }
  }
  // 返回 x 的系数和其余因数和
  return [coefficient, sum];
}
console.log(solveEquation('x=x'));
