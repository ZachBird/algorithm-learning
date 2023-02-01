/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
  const keyMap = new Map();
  let cur = 'a';
  for (let i = 0; i < key.length; ++i) {
    if (key[i] !== ' ' && !keyMap.get(key[i])) {
      keyMap.set(key[i], cur);
      cur = String.fromCharCode(cur.charCodeAt() + 1);
    }
  }

  let ans = '';
  for (let i = 0; i < message.length; ++i) {
    ans += (message[i] === ' ' ? ' ' : keyMap.get(message[i]));
  }

  return ans;
};
