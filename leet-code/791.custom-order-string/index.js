/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const A_CHAR_CODE = 'a'.charCodeAt();
const customSortString = function (order, s) {
  // 模拟
  const charCount = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    const curCode = s[i].charCodeAt() - A_CHAR_CODE;
    charCount[curCode]++;
  }

  let ans = '';
  for (let i = 0; i < order.length; ++i) {
    const curCode = order[i].charCodeAt() - A_CHAR_CODE;
    ans += order[i].repeat(charCount[curCode]);
    charCount[curCode] = 0;
  }

  for (let i = 0; i < charCount.length; ++i) {
    const cnt = charCount[i];
    if (cnt > 0) {
      ans += String.fromCharCode(i + A_CHAR_CODE).repeat(cnt);
    }
  }
  return ans;
};
