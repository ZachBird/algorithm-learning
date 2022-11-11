/**
 * @param {string} s
 * @return {boolean}
 */
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
const halvesAreAlike = function (s) {
  const n = s.length >> 1;
  // 0 ~ n - 1 , n ~ 2n - 1
  let halfBefore = 0;
  let halfAfter = 0;
  for (let i = 0; i < n; ++i) {
    if (vowels.has(s[i])) halfBefore++;
    if (vowels.has(s[i + n])) halfAfter++;
  }
  return halfBefore === halfAfter;
};
