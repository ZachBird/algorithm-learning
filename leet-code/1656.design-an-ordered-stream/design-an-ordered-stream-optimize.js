/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  // 模拟题
  // 有序，数组存
  this.stream = new Array(n).fill(0);
  // 存个映射，减少查询 - ✅ 有序，没必要存映射，直接查下一个元素是否存在即可
  // this.keyIdxMap = new Map();
  // 指针，相当于 i + 1
  this.ptr = 1;
};

/**
* @param {number} idKey
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function (idKey, value) {
  // 先存入
  this.stream[idKey - 1] = value;
  // 更新映射
  // this.keyIdxMap.set(idKey, idKey - 1);
  const ans = [];
  if (idKey === this.ptr) {
    // 没有开 n + 1 数组存，那么 idKey 为下一个存放位置
    while (this.stream[idKey - 1]) {
      ans.push(this.stream[idKey - 1]);
      idKey++;
    }
    this.ptr = idKey;
    return ans;
  } else {
    return [];
  }
};

/**
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(idKey,value)
*/

const os = new OrderedStream(5);
os.insert(3, 'ccccc'); // 插入 (3, "ccccc")，返回 []
os.insert(1, 'aaaaa'); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
os.insert(2, 'bbbbb'); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
os.insert(5, 'eeeee'); // 插入 (5, "eeeee")，返回 []
os.insert(4, 'ddddd'); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
