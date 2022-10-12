/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
const numComponents = function (head, nums) {
  const targetSet = new Set(nums);
  let ans = 0;
  while (head !== null) {
    if (targetSet.has(head.val)) {
      // 遇到组件直到不相等再继续遍历
      while (head !== null && targetSet.has(head.val)) head = head.next;
      ans++;
    } else {
      head = head.next;
    }
  }
  return ans;
};
