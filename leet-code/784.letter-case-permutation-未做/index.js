const letterCasePermutation = function (s) {
  const ans = [];
  const q = [''];
  while (q.length !== 0) {
    const cur = q[0];
    const pos = cur.length;
    if (pos === s.length) {
      ans.push(cur);
      q.shift();
    } else {
      if (isLetter(s[pos])) {
        q.push(cur + swapCase(s[pos]));
      }
      q[0] += s[pos];
    }
  }
  return ans;
};

const swapCase = (ch) => {
  if (ch >= 'a' && ch <= 'z') {
    return ch.toUpperCase();
  }
  if (ch >= 'A' && ch <= 'Z') {
    return ch.toLowerCase();
  }
};

const isLetter = (ch) => {
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
};
