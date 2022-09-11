/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
// 若选中的支付比例为 r 则需要满足 r * quality[i] >= wage[i]
// 则 r >= wage[i] / quality[i], 即 r 要大于定义 k 个工人的比值才能符合题意
// 并且，要求 totalWage 最小，因为 totalWage = totalQuality * r
// 所以 维护 totalQuality 即可。（用优先队列, 不然就得每遍历到一个元素需要重新计算一遍）
// LeetCode 内置优先队列 MaxPriorityQueue
const mincostToHireWorkers = function (quality, wage, k) {
  // 构造 [ratio, index] 的数据，index 用来取 quality 用
  const ratioList = quality.map((q, i) => ([wage[i] / q, i]));
  ratioList.sort((a, b) => a[0] - b[0]);
  // eslint-disable-next-line no-undef
  const pq = new MaxPriorityQueue();
  let ans = Number.MAX_SAFE_INTEGER;
  let totalQuality = 0;
  for (let i = 0; i < ratioList.length; ++i) {
    const curIndex = ratioList[i][1];
    const curQuality = quality[curIndex];
    totalQuality += curQuality;
    pq.enqueue(curQuality);
    if (pq.size() > k) totalQuality -= pq.dequeue().element;
    if (pq.size() === k) ans = Math.min(ans, totalQuality * ratioList[i][0]);
  }
  return ans.toFixed(5);
};
