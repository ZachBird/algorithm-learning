/**
 * @param {string} target
 * @return {string}
 */
const alphabetBoardPath = function (target) {
  let ans = '';

  let x = 0;
  let y = 0;
  for (const cur of target) {
    const nx = Math.floor((cur.charCodeAt() - 97) / 5);
    const ny = Math.floor((cur.charCodeAt() - 97) % 5);

    // 考虑到 z 优先处理上移和左移
    if (nx < x) {
      ans += 'U'.repeat(x - nx);
    }

    if (ny < y) {
      ans += 'L'.repeat(y - ny);
    }

    if (nx > x) {
      ans += 'D'.repeat(nx - x);
    }

    if (ny > y) {
      ans += 'R'.repeat(ny - y);
    }

    ans += '!';
    x = nx;
    y = ny;
  }

  return ans;
};
