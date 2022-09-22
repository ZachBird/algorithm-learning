const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
  this.newNode = function (val, next, prev) {
    return { val, next, prev };
  };
};

/**
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  if (this.length === 0) return -1;
  let curNode = this.head;
  let curIdx = 0;
  while (curNode !== null) {
    // console.log(curNode.val, curIdx, index);
    if (curIdx === index) {
      return curNode.val;
    } else {
      curNode = curNode.next;
      curIdx++;
    }
  }
  return -1;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  const oldHead = this.head;
  const newHead = this.newNode(val, oldHead, null);
  if (oldHead !== null) oldHead.prev = newHead;
  this.head = newHead;
  if (this.length === 0) this.tail = newHead;
  this.length++;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  const oldTail = this.tail;
  const newTail = this.newNode(val, null, oldTail);
  if (oldTail !== null) oldTail.next = newTail;
  this.tail = newTail;
  if (this.length === 0) this.head = newTail;
  this.length++;
};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val);
  } else if (index === this.length) {
    this.addAtTail(val);
  } else {
    let curNode = this.head;
    let curIdx = 0;
    while (curNode !== null) {
      if (curIdx === index) {
        const newNode = this.newNode(val, curNode, curNode.prev);
        curNode.prev.next = newNode;
        curNode.prev = newNode;
        this.length++;
        break;
      } else {
        curNode = curNode.next;
        curIdx++;
      }
    }
  }
};

/**
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length--;
    return;
  }
  let curNode = this.head;
  let curIdx = 0;
  while (curNode !== null) {
    if (curIdx === index) {
      if (curNode.prev !== null) curNode.prev.next = curNode.next;
      if (curNode.next !== null) curNode.next.prev = curNode.prev;
      if (index === 0) this.head = curNode.next;
      if (index === this.length - 1) this.tail = curNode.prev;
      this.length--;
      break;
    } else {
      curNode = curNode.next;
      curIdx++;
    }
  }
};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
