/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  // 这种方式为什么要 k + 1，要梳理一下
  // 因为 队尾的插入位置 == 队首位置 有二义性
  this.size = k + 1;
  this.cQueue = new Array(this.size).fill(null);
  this.head = 0;
  this.tail = 0;
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.cQueue[this.tail] = value;
  this.tail++;
  this.tail %= this.size;
  console.log(this.cQueue);
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.cQueue[this.head] = null;
  this.head++;
  this.head %= this.size;
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.cQueue[this.head];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  // TODO: 梳理一下
  return this.cQueue[(this.tail - 1 + this.size) % this.size];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === this.tail;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function () {
  return ((this.tail + 1) % this.size) === this.head;
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
console.log(myCircularQueue.deQueue()); // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.enQueue(5)); // return True
console.log(myCircularQueue.Rear()); // return 4
