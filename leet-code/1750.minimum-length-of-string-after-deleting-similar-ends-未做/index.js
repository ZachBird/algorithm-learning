const minimumLength = function (s) {
  const n = s.length;
  let left = 0; let right = n - 1;
  while (left < right && s[left] === s[right]) {
    const c = s[left];
    while (left <= right && s[left] === c) {
      left++;
    }
    while (left <= right && s[right] === c) {
      right--;
    }
  }
  return right - left + 1;
};
