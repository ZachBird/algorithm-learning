/**
 * @param {number[]} nums
 * @return {number[]}
 */
const missingTwo = function (nums) {
  // 数学方法，作差
  const n = nums.length;
  const idealSum = Math.floor((n + 3) * (n + 2) / 2);
  const actualSum = nums.reduce((sum, cur) => (sum += cur));
  const diff = idealSum - actualSum;
  // 取得二者差值，求中间值
  // 再用原数组中小于中间值的半侧的和，得到其中一个数
  // 因为两个不相同的数字相加，其分别位于平均数的两侧
  const mid = Math.floor((diff) / 2);
  let halfSum = (1 + mid) * mid / 2;
  for (const num of nums) {
    if (num <= mid) halfSum -= num;
  }
  return [halfSum, diff - halfSum];
};
