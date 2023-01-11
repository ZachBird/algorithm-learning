/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function (num) {
  const digtalHash = new Map();
  for (let i = 0; i < num.length; ++i) {
    if (!digtalHash.get(num[i])) {
      digtalHash.set(num[i], 1);
    } else {
      digtalHash.set(num[i], digtalHash.get(num[i]) + 1);
    }
  }

  for (let i = 0; i < num.length; ++i) {
    if ((digtalHash.get(i.toString()) ?? 0) !== Number(num[i])) {
      return false;
    }
  }
  return true;
};
