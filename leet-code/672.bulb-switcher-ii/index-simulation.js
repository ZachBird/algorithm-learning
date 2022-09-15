/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
const flipLights = function (n = 4, presses = 4) {
  const ans = new Set();
  // 二进制数的枚举，记一下
  for (let i = 0; i < 1 << 4; ++i) {
    const pressArr = new Array(4).fill(0);
    for (let j = 0; j < 4; ++j) {
      pressArr[j] = (i >> j) & 1;
    }
    // console.log(i, pressArr);
    const sumPress = pressArr.reduce((sum, num) => (sum += num));
    // console.log(sumPress, i);
    // (i + 1) % 4 === 0 && console.log('---');
    if (sumPress % 2 === presses % 2 && sumPress <= presses) {
      // 第一个条件是为了确保sum的奇偶性与总按压次数的奇偶性保持一致
      // 第二个条件是为了保证presses足够大能够达到i这个状态
      // 两个条件确保了presses能够让4个开关到达i这个状态
      let status = pressArr[0] ^ pressArr[2] ^ pressArr[3];
      if (n >= 2) {
        // 左移一位，记录第二盏灯的状态
        status |= (pressArr[0] ^ pressArr[1]) << 1;
      }
      if (n >= 3) {
        status |= (pressArr[0] ^ pressArr[2]) << 2;
      }
      if (n >= 4) {
        status |= (pressArr[0] ^ pressArr[1] ^ pressArr[3]) << 3;
      }
      ans.add(status);
    }
  }
  // console.log(ans);
  return ans;
};

flipLights();
