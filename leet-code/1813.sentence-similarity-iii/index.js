/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = function (sentence1, sentence2) {
  const s1 = sentence1.split(' ');
  const s2 = sentence2.split(' ');

  let leftSame = 0;
  let rigthSame = 0;

  while (leftSame < s1.length && leftSame < s2.length && s1[leftSame] === s2[leftSame]) {
    leftSame++;
  }

  while (
    rigthSame < s1.length - leftSame &&
    rigthSame < s2.length - leftSame &&
    s1[s1.length - rigthSame - 1] === s2[s2.length - rigthSame - 1]
  ) {
    rigthSame++;
  }

  return ((leftSame + rigthSame) === Math.min(s1.length, s2.length));
};
