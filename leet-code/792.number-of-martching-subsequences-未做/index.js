const numMatchingSubseq = function (s, words) {
  const pos = new Array(26).fill(0).map(() => []);
  for (let i = 0; i < s.length; ++i) {
    pos[s[i].charCodeAt() - 'a'.charCodeAt()].push(i);
  }
  let res = words.length;
  for (const w of words) {
    if (w.length > s.length) {
      --res;
      continue;
    }
    let p = -1;
    for (let i = 0; i < w.length; ++i) {
      const c = w[i];
      if (pos[c.charCodeAt() - 'a'.charCodeAt()].length === 0 || pos[c.charCodeAt() - 'a'.charCodeAt()][pos[c.charCodeAt() - 'a'.charCodeAt()].length - 1] <= p) {
        --res;
        break;
      }
      p = binarySearch(pos[c.charCodeAt() - 'a'.charCodeAt()], p);
    }
  }
  return res;
};

const binarySearch = (list, target) => {
  let left = 0; let right = list.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (list[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return list[left];
};
