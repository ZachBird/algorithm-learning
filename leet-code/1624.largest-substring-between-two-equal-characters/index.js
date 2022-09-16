/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
  const charMap = new Array(26).fill(-1);
  let maxLength = -1;
  for (let i = 0; i < s.length; ++i) {
    const charIdx = s[i].charCodeAt() - 'a'.charCodeAt();
    if (charMap[charIdx] !== -1) {
      const curSubLength = i - charMap[charIdx] - 1;
      maxLength = Math.max(maxLength, curSubLength);
    } else {
      // 只更新第一次出现的位置，之后只要再出现只计算距离
      charMap[charIdx] = i;
    }
  }
  return maxLength;
};

maxLengthBetweenEqualCharacters('mgntdygtxrvxjnwksqhxuxtrv');
// expect: 18
