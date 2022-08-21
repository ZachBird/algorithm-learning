const isPrefixOfWord = function (sentence, searchWord) {
  const n = sentence.length; let index = 1; let start = 0; let end = 0;
  while (start < n) {
    while (end < n && sentence[end] !== ' ') {
      end++;
    }
    if (isPrefix(sentence, start, end, searchWord)) {
      return index;
    }

    index++;
    end++;
    start = end;
  }
  return -1;
};

const isPrefix = (sentence, start, end, searchWord) => {
  for (let i = 0; i < searchWord.length; i++) {
    if (start + i >= end || sentence[start + i] !== searchWord[i]) {
      return false;
    }
  }
  return true;
};
