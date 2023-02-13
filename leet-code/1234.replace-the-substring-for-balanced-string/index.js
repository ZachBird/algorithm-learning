/**
 * @param {string} s
 * @return {number}
 */
const isOk = (cntMap, target) => {
  return Array.from(cntMap.values()).every(val => val <= target);
};

const balancedString = function (s) {
  const cntMap = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]]);
  for (const c of s) cntMap.set(c, cntMap.get(c) + 1);

  // 原则为，除子串外的字符串的每个字母的个数都小于等于 n/4 满足可以用替换的方式得到平衡字符串的条件
  const n = s.length;
  const target = n / 4;

  const ok = isOk(cntMap, target);
  if (ok) return 0;

  let ans = n;
  let left = 0;
  for (let right = 0; right < n; ++right) {
    cntMap.set(s[right], cntMap.get(s[right]) - 1);
    while (isOk(cntMap, target)) {
      ans = Math.min(ans, right - left + 1);
      // 左端点右移
      cntMap.set(s[left], cntMap.get(s[left]) + 1);
      left++;
    }
  }

  return ans;
};
