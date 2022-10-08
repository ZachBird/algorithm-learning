/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 田忌赛马的思路
const advantageCount = function (n1, n2) {
  const nums1 = [...n1];
  const nums2 = [...n2];
  const nums2Idx = nums2.map((item, idx) => idx);
  const orderedN1 = nums1.sort((a, b) => a - b);
  const orderedN2Idx = nums2Idx.sort((a, b) => nums2[a] - nums2[b]);
  let head = 0;
  let tail = nums1.length - 1;
  for (let i = orderedN2Idx.length - 1; i >= 0; --i) {
    if (orderedN1[tail] > nums2[orderedN2Idx[i]]) {
      // 满足优势，替换掉
      nums2[orderedN2Idx[i]] = orderedN1[tail--];
    } else {
      // 不满足，挪一个最小的来顶，尽可能让其他的有机会取得优势
      nums2[orderedN2Idx[i]] = orderedN1[head++];
    }
  }
  return nums2;
};
