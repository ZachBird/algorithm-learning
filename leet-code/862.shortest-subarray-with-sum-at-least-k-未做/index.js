const shortestSubarray = function (nums, k) {
  const n = nums.length;
  const preSumArr = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSumArr[i + 1] = preSumArr[i] + nums[i];
  }
  let res = n + 1;
  const queue = [];
  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i];
    while (queue.length !== 0 && curSum - preSumArr[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift());
    }
    while (queue.length !== 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
      queue.pop();
    }
    queue.push(i);
  }
  return res < n + 1 ? res : -1;
};
