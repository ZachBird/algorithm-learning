/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 还有另一种做法 - 最小表示法
const orderlyQueue = function (s, k) {
  // 分情况讨论
  if (k === 1) {
    // 每次移动一位枚举出最大的字典序
    let ans = s;
    for (let i = 0; i < (s.length - 1); ++i) {
      s = s.substring(1) + s[0];
      ans = ans > s ? s : ans;
    }
    return ans;
  } else {
    return s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  }
};

console.log(orderlyQueue('baaca', 3));
// expect 'aaabc'
