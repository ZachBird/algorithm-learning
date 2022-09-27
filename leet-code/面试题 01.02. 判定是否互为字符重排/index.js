/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const CheckPermutation = function (s1, s2) {
  const s1Len = s1.length;
  const s2Len = s2.length;
  if (s1Len !== s2Len) return false;
  const alphabetSet = new Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < s1Len; ++i) {
    if (++alphabetSet[s1[i].charCodeAt() - 97]) count++;
    if (alphabetSet[s2[i].charCodeAt() - 97]--) count--;
  }
  return count === 0;
};
