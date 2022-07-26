// const level: number = 10
// class TNode {
//     val: number
//     ne: TNode[] = new Array<TNode>(level)
//     constructor(_val: number) {
//         this.val = _val
//     }
// }
// class Skiplist {
//     he: TNode = new TNode(-1)
//     find(t: number, ns: TNode[]): void {
//         let cur = this.he
//         for (let i = level - 1; i >= 0; i--) {
//             while (cur.ne[i] != null && cur.ne[i].val < t) cur = cur.ne[i]
//             ns[i] = cur
//         }
//     }
//     search(t: number): boolean {
//         let ns: TNode[] = new Array<TNode>(level)
//         this.find(t, ns)
//         return ns[0].ne[0] != null && ns[0].ne[0].val == t
//     }
//     add(t: number): void {
//         let ns: TNode[] = new Array<TNode>(level)
//         this.find(t, ns)
//         const node = new TNode(t)
//         for (let i = 0; i < level; i++) {
//             node.ne[i] = ns[i].ne[i]
//             ns[i].ne[i] = node
//             if (Math.round(Math.random()) == 0) break
//         }
//     }
//     erase(t: number): boolean {
//         let ns: TNode[] = new Array<TNode>(level)
//         this.find(t, ns)
//         const node = ns[0].ne[0]
//         if (node == null || node.val != t) return false
//         for (let i = 0; i < level && ns[i].ne[i] == node; i++) ns[i].ne[i] = ns[i].ne[i].ne[i]
//         return true
//     }
// }

const Skiplist = function () {

};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {

};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {

};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {

};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
