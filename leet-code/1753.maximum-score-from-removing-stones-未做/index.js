const maximumScore = function (a, b, c) {
  const sum = a + b + c;
  const maxVal = Math.max(Math.max(a, b), c);
  return Math.min(sum - maxVal, Math.floor(sum / 2));
};
