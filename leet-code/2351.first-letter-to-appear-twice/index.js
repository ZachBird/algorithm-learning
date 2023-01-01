const repeatedCharacter = function (s) {
  const seen = new Set();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (seen.has(ch)) {
      return ch;
    }
    seen.add(ch);
  }
  // impossible
  return ' ';
};
