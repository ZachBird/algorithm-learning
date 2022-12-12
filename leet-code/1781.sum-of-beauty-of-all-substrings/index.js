/**
 * @param {string} s
 * @return {number}
 */
const beautySum = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    const alphabets = new Array(26).fill(0);
    let max = 0;
    for (let j = i; j < n; ++j) {
      const curLetter = s[j].charCodeAt() - 'a'.charCodeAt();
      max = Math.max(max, ++alphabets[curLetter]);
      let min = Number.MAX_SAFE_INTEGER;
      for (const eachFreq of alphabets) {
        if (eachFreq > 0) min = Math.min(min, eachFreq);
      }
      ans += max - min;
    }
  }
  return ans;
};
