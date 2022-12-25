const minimumBoxes = function (n) {
  let cur = 1; let i = 1; let j = 1;
  while (n > cur) {
    n -= cur;
    i++;
    cur += i;
  }
  cur = 1;
  while (n > cur) {
    n -= cur;
    j++;
    cur++;
  }
  return (i - 1) * i / 2 + j;
};
