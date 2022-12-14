/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;
  const hashSet = new Array(26).fill(0);
  for (let i = 0; i < sentence.length; ++i) {
    const curLetter = sentence[i].charCodeAt() - 'a'.charCodeAt();
    hashSet[curLetter]++;
  }
  for (let i = 0; i < 26; ++i) {
    if (hashSet[i] === 0) return false;
  }
  return true;
};
