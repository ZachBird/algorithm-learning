/**
 * @param {number} n
 * @return {number}
 */
// 暴力破解
const rotatedDigits = function (n) {
  let count = 0;
  for (let i = 1; i <= n; ++i) {
    if (checkValidate(i)) count++;
  }
  return count;
};

const checkValidate = (num) => {
  const numArr = [...num.toString()];
  const hasRequiredNum = numArr.includes('2') || numArr.includes('5') || numArr.includes('6') || numArr.includes('9');
  const hasBannedNum = numArr.includes('3') || numArr.includes('4') || numArr.includes('7');
  if (hasRequiredNum && !hasBannedNum) return true;
  return false;
};
