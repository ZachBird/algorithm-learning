/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = function (s) {
  // 枚举
  const str = s.substring(1, s.length - 1);
  const n = str.length;
  const ans = [];
  for (let i = 0; i < n - 1; ++i) {
    const leftEnum = search(str, 0, i);
    const rightEnum = search(str, i + 1, n - 1);
    for (const left of leftEnum) {
      for (const right of rightEnum) {
        ans.push(`(${left}, ${right})`);
      }
    }
  }
  return ans;
};

const search = function (s, start, end) {
  const ans = [];
  // 还要枚举为完整字串的情况，但这种情况只有整个字串第一个字符不为零的情况需要处理
  if (start === end || s[start] !== '0') ans.push(s.substring(start, end + 1));
  for (let i = start; i < end; ++i) {
    const beforeDot = s.substring(start, i + 1);
    const afterDot = s.substring(i + 1, end + 1);
    // 前导0和后导0的判断
    if (beforeDot.length > 1 && beforeDot[0] === '0') continue;
    if (afterDot[afterDot.length - 1] === '0') continue;
    ans.push(`${beforeDot}.${afterDot}`);
  }
  return ans;
};
