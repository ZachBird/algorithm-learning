/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  const n = command.length;
  let ans = '';
  for (let i = 0; i < n;) {
    const cur = command[i];
    if (cur === 'G') {
      ans += 'G';
    } else {
      // cur === (
      if (command[i + 1] === ')') {
        ans += 'o';
        i++;
      } else {
        ans += 'al';
        i += 3;
      }
    }
    i++;
  }
  return ans;
};
