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
  // 优化版本 - 先定位链表节点，体会一下思想
  // a 插入节点的前继结点
  let preA = list1;
  for (let i = 0; i < a - 1; ++i) {
    preA = preA.next;
  }
  // b 节点后继位置
  let nextB = preA;
  for (let i = 0; i < b - a + 2; ++i) {
    nextB = nextB.next;
  }

  // 拼接节点
  preA.next = list2;
  while (list2.next) {
    // 找到 list2 的尾结点
    list2 = list2.next;
  }
  list2.next = nextB;

  return list1;
};
