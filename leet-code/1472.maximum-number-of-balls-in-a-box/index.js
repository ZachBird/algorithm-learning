/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function (lowLimit, highLimit) {
  // 模拟
  const cnts = new Array(46).fill(0);
  let max = 0;
  for (let i = lowLimit; i <= highLimit; ++i) {
    let curNum = i;
    let digtalSum = 0;
    while (curNum !== 0) {
      digtalSum += curNum % 10;
      curNum = Math.floor(curNum / 10);
    }
    cnts[digtalSum]++;
    max = Math.max(max, cnts[digtalSum]);
  }
  return max;
};
