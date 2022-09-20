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
  const bucket = new Array(k).fill(0);
  // MARK: 超时优化点 1，nums 降序排，大数先放桶
  nums.sort((a, b) => b - a);
  return backtrack(nums, 0, bucket, k, target);
};

const backtrack = function (nums, index, bucket, k, target) {
  // 结束条件：已经处理完所有球
  if (index === nums.length) {
    // MARK: 其实这个地方不需要判断，因为当 index == num.length 时，所有球已经按要求装入所有桶，所以肯定是一个满足要求的解
    // 即：每个桶内球的和一定为 target
    // 判断现在桶中的球是否符合要求 -> 路径是否满足要求
    // for (let i = 0; i < k; i++) {
    //   if (bucket[i] !== target) return false;
    // }
    return true;
  }
  // 主要处理逻辑，以数字球的视角，去按步骤放入桶
  for (let i = 0; i < k; ++i) {
    // MARK: 关键剪枝
    // 如果当前桶和上一个桶内的元素和相等，则跳过
    // 原因：如果元素和相等，那么 nums[index] 选择上一个桶和选择当前桶可以得到的结果是一致的
    if (i > 0 && bucket[i] === bucket[i - 1]) continue;
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
