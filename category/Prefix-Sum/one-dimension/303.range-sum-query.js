// 改题为简单的 前缀和 + 差分 例题
// 前缀和 把握住 空间换时间 的特点还是比较好理解
// 差分指的是从前缀和中，将所求区域的结果通过与前项前缀和作差来计算出来

// 附一维前缀和模板：
// https://leetcode.cn/problems/range-sum-query-immutable/solution/sha-shi-qian-zhui-he-ya-tu-jie-qian-zhui-0rla/

/**
  输入：
  ["NumArray", "sumRange", "sumRange", "sumRange"]
  [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
  输出：
  [null, 1, -1, -3]

  解释：
  NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
  numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
  numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
*/

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  // 构造前缀和数组
  // 通常为 nums.length + 1
  // 其中存放元素为当前索引 i 之前的 i - 1 项的总和
  // 这样，range(start, end) = preSums[end] - preSums[start]
  // [0, 5] [1, 10]
  // 1, 2, 3, 4, 5
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  this.preSums = new Array(nums.length + 1).fill(0);
  for (let i = 1; i <= nums.length; ++i) {
    this.preSums[i] = this.preSums[i - 1] + nums[i - 1];
  }
  console.log(this.preSums);
};

/**
* @param {number} left
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  // 但由于我们源数组下标从 0 开始，因此要在模板的基础上进行 + 1
  left++;
  right++;
  // 这里其实和你要求的范围的开闭区间有关，最好画图看一下
  return this.preSums[right] - this.preSums[left - 1];
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(numArray);
console.log(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1))
console.log(numArray.sumRange(0, 5)); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
