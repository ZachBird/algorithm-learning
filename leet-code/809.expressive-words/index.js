/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const check = function (s, word) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < word.length) {
    if (s[p1] !== word[p2]) return false;
    const curChar = s[p1];
    let tarCnt = 0;
    while (p1 < s.length && s[p1] === curChar) {
      tarCnt++;
      p1++;
    }
    let originCnt = 0;
    while (p2 < word.length && word[p2] === curChar) {
      originCnt++;
      p2++;
    }
    if (tarCnt < originCnt) return false;
    if (tarCnt < 3 && originCnt !== tarCnt) return false;
  }
  return p1 === s.length && p2 === word.length;
};

const expressiveWords = function (s, words) {
  let ans = 0;
  for (const word of words) {
    if (check(s, word)) ans++;
  }
  return ans;
};
