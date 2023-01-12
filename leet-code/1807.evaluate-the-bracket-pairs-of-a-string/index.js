/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function (s, knowledge) {
  const hashMap = new Map();
  for (const [k, v] of knowledge) {
    hashMap.set(k, v);
  }
  console.log(hashMap);

  let ans = '';
  let key = '';
  for (let i = 0; i < s.length;) {
    if (s[i] === '(') {
      i++;
      while (s[i] !== ')') {
        key += s[i++];
      }
      i++;
      if (hashMap.get(key)) ans += hashMap.get(key);
      else ans += '?';
      key = '';
    } else {
      ans += s[i];
      i++;
    }
  }
  return ans;
};
