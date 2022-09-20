/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  const sums = nums.reduce((sum, num) => (sum += num));
  // 不能整除，说明无法分出整数解
  if (sums % k !== 0) return false;
  // 每个子集需要满足的和
  const target = sums / k;
  const bucket = new Array(k);
  return backtrack(nums, 0, bucket, k, target);
};

const backtrack = function (nums, index, bucket, k, target) {
  // 结束条件：已经处理完所有球
  if (index === nums.length) {
    // 判断现在桶中的球是否符合要求 -> 路径是否满足要求
    for (let i = 0; i < k; i++) {
      if (bucket[i] !== target) return false;
    }
    return true;
  }
  // 主要处理逻辑，以数字球的视角，去按步骤放入桶
  for (let i = 0; i < k; ++i) {
    // 放入之后当前桶的值大于 target ，则选择下一桶
    if (bucket[i] + nums[index] > target) continue;
    // 否则，置入当前桶
    bucket[i] += nums[index];
    // 处理下一个球
    if (backtrack(nums, index + 1, bucket, k, target)) return true;
    // 不满足条件，则函数会执行下来，将这次选择撤销
    bucket[i] -= nums[index];
  }
  // 可选的选择都完成，仍未退出递归得出结果，则没有解
  return false;
};
