/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function (s, k) {
  const n = s.length;
  let digtalStr = '';
  for (let i = 0; i < n; ++i) {
    const charCode = s[i].charCodeAt() - 96;
    digtalStr += charCode;
  }
  let ans = 0;
  while (k-- > 0) {
    const m = digtalStr.length;
    let curNum = 0;
    for (let i = 0; i < m; ++i) {
      curNum += parseInt(digtalStr[i], 10);
    }
    ans = curNum;
    digtalStr = curNum.toString();
  }
  return ans;
};
