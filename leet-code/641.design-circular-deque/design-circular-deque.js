/**
 * @param {number} k
 */
const MyCircularDeque = function (k) {
  this.deque = [];
  this.size = k;
  this.head = 0;
  this.tail = 0;
  this.length = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  // 头插会有坐标负值的问题，解决方法是 『增加偏移后减一取模』
  this.head = (this.head + this.size - 1) % this.size;
  this.deque[this.head] = value;
  this.length++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  // 尾插，坐标为待插入位置，先插入值，再算坐标 => +1 取模
  this.deque[this.tail] = value;
  this.tail = (this.tail + 1) % this.size;
  this.length++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  // 从头部移除，头部指针往后推，所以采用尾插的计算方式 +1 取模
  this.deque[this.head] = null;
  this.head = (this.head + 1) % this.size;
  this.length--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  // 从尾部移除，指针前推，采用头插的计算方法
  this.tail = (this.tail + this.size - 1) % this.size;
  // 将移除位置元素置为 null （是否有必要
  this.deque[this.tail] = null;
  this.length--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.deque[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  // tail 指向当前应插入位置，所以当前尾结点需要是 tail - 1
  return this.deque[(this.tail + this.size - 1) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.length === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
const circularDeque = new MyCircularDeque(3); // 设置容量大小为3
circularDeque.insertLast(1); // 返回 true
circularDeque.insertLast(2); // 返回 true
circularDeque.insertFront(3); // 返回 true
circularDeque.insertFront(4); // 已经满了，返回 false
circularDeque.getRear(); // 返回 2
circularDeque.isFull(); // 返回 true
circularDeque.deleteLast(); // 返回 true
circularDeque.insertFront(4); // 返回 true
circularDeque.getFront(); // 返回 4
