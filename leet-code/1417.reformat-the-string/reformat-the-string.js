/**
 * @param {string} s
 * @return {string}
 */
const reformat = function (s) {
  // 双指针不行，因为要先确认字母多还是数字多来决定从谁先开始排
  // 处理字符串
  const digtals = [];
  const letters = [];
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    if (/\d/.test(curChar)) {
      digtals.push(curChar);
    } else {
      letters.push(curChar);
    }
  }
  // 进行判断及答案生成
  if (Math.abs(digtals.length - letters.length) > 1) return '';
  let ans = '';
  if (digtals.length >= letters.length) {
    for (let i = 0; i < digtals.length; ++i) {
      ans += digtals[i];
      if (letters[i]) {
        ans += letters[i];
      }
    }
  } else {
    for (let i = 0; i < letters.length; ++i) {
      ans += letters[i];
      if (digtals[i]) {
        ans += digtals[i];
      }
    }
  }
  return ans;
};

reformat('covid2019');
