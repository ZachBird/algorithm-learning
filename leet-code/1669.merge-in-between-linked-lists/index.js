/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function (list1, a, b, list2) {
  let curNode = list1;
  let idx = 0;
  while (curNode !== null) {
    // 遍历list1
    if (idx + 1 === a) {
      const removeListHead = curNode.next;
      curNode.next = list2;
      curNode = removeListHead;
      idx++;
      continue;
    } else if (idx === b) {
      let tempNode = list2;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // tempNode 为 list2 的尾结点
      tempNode.next = curNode.next;
      break;
    }
    curNode = curNode.next;
    idx++;
  }
  return list1;
};
