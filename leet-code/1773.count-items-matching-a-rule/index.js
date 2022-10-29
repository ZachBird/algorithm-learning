/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const keyIdxMap = {
  type: 0,
  color: 1,
  name: 2
};

const countMatches = function (items, ruleKey, ruleValue) {
  const keyIdx = keyIdxMap[ruleKey];
  let ans = 0;
  for (const item of items) {
    if (item[keyIdx] === ruleValue) {
      ans += 1;
    }
  }
  return ans;
};
