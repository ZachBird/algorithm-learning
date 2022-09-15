/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
// 模拟 4 个开关的状态
const flipLights = function (n, presses) {
  const ans = new Set(); // 需要去重 n = 1 时
  // 遍历 4 盏灯的所有可能的操作数，因归纳得知，4 盏灯的状态即可代表任意状态数
  const hexDigtal = 4;
  // 二进制数遍历
  for (let i = 0; i < (1 << hexDigtal); ++i) {
    // 4 个开关的
    const switcherCount = 4;
    const switcherStatus = new Array(switcherCount).fill(0);
    for (let j = 0; j < switcherCount; ++j) {
      switcherStatus[j] = (i >> j) & 1;
    }
    // 当前开关状态的操作总数
    const totalPresses = switcherStatus.reduce((sum, num) => (sum += num));
    // 1. 保证当前遍历到的开关操作次数的奇偶性与要求奇偶性一致
    // 2. 保证当前遍历到的开关操作次数达到要求操作次数
    // 满足 1 和 2 才进行操作数的模拟
    if ((totalPresses & 1) === (presses & 1) && totalPresses <= presses) {
      // 编号为 6k+1，受按钮 1,3,4 影响；
      // 编号为 6k+2, 6k+6，受按钮 1,2 影响；
      // 编号为 6k+3, 6k+5，受按钮 1,3 影响；
      // 编号为 6k+4，受按钮 1,2,4 影响。
      let curBulbStatus = (switcherStatus[0] ^ switcherStatus[2] ^ switcherStatus[3]);
      if (n >= 2) {
        // 按位存当前灯的位置
        curBulbStatus |= (switcherStatus[0] ^ switcherStatus[1]) << 1;
      }
      if (n >= 3) {
        curBulbStatus |= (switcherStatus[0] ^ switcherStatus[2]) << 2;
      }
      if (n >= 4) {
        curBulbStatus |= (switcherStatus[0] ^ switcherStatus[1] ^ switcherStatus[3]) << 3;
      }
      ans.add(curBulbStatus);
    }
  }
  return ans.size;
};

flipLights();
