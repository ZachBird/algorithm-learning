const a1 = { name: 'a1', child: null, sibling: null, return: null };
const b1 = { name: 'b1', child: null, sibling: null, return: null };
const b2 = { name: 'b2', child: null, sibling: null, return: null };
const b3 = { name: 'b3', child: null, sibling: null, return: null };
const c1 = { name: 'c1', child: null, sibling: null, return: null };
const c2 = { name: 'c2', child: null, sibling: null, return: null };
const d1 = { name: 'd1', child: null, sibling: null, return: null };
const d2 = { name: 'd2', child: null, sibling: null, return: null };

a1.child = b1;
b1.sibling = b2;
b2.sibling = b3;
b2.child = c1;
b3.child = c2;
c1.child = d1;
d1.sibling = d2;

b1.return = b2.return = b3.return = a1;
c1.return = b2;
d1.return = d2.return = c1;
c2.return = b3;

let nextUnitOfWork = a1;

workLoop();

// 手动实现
function workLoop () {
  // workLoop 里面根据当前工作单元来进行对节点的遍历
  while (nextUnitOfWork !== null) {
    // 即整个流程其实是走到 nextUnitOfWork 为 null 结束
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // console.log('nextUnitOfWork', nextUnitOfWork.name);
  }
}

// workInProgress 把当前执行的 fiber 节点称为工作单元
function performUnitOfWork (workInProgress) {
  let next = beginWork(workInProgress);
  if (next === null) {
    // 如果没子节点，处理当前节点的熊弟节点，如果没有熊弟节点，回溯
    next = completeUnitOfWork(workInProgress);
  }
  return next;
}

// 控制流程的主要函数有两个
function beginWork (workInProgress) {
  // 控制子节点的 dfs
  // 其实 react 应该是在这里做的 fiber 节点的构成
  console.log('beginWork', workInProgress.name);
  return workInProgress.child;
}

// 只控制熊弟节点的继续遍历，和回溯。child 的控制在上一步已经完成了
function completeUnitOfWork (workInProgress) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 控制兄弟节点的 dfs 及回溯的步骤
    // console.log('completeUnitOfWork', workInProgress);
    const returnFiber = workInProgress.return;
    const siblingFiber = workInProgress.sibling;

    nextUnitOfWork = completeWork(workInProgress);

    if (siblingFiber !== null) {
      // 把遍历对象换为兄弟节点，继续遍历
      return siblingFiber;
    } else if (returnFiber !== null) {
      // 没有兄弟节点了，回上一个点
      workInProgress = returnFiber;
      continue;
    } else {
      // 为根节点的时候，返回
      return null;
    }
  }
}

function completeWork (workInProgress) {
  // doSomthing
  console.log('completeWork', workInProgress.name);
  return null;
}

// beginWork a1
// beginWork b1
// completeWork b1
// beginWork b2
// beginWork c1
// beginWork d1
// completeWork d1
// beginWork d2
// completeWork d2
// completeWork c1
// completeWork b2
// beginWork b3
// beginWork c2
// completeWork c2
// completeWork b3
// completeWork a1

// function workLoop() {
//   while (nextUnitOfWork !== null) {
//     nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
//   }
// }

// function performUnitOfWork(workInProgress) {
//   // begin work 控制是否还有子节点
//   let next = beginWork(workInProgress);
//   if (next === null) {
//     // complete work 控制遍历兄弟节点
//     next = completeUnitOfWork(workInProgress);
//   }
//   return next;
// }

// function beginWork(workInProgress) {
//   log('beginWork ' + workInProgress.name);
//   return workInProgress.child;
// }

// function completeUnitOfWork(workInProgress) {
//   // eslint-disable-next-line no-constant-condition
//   while (true) {
//     let returnFiber = workInProgress.return;
//     let siblingFiber = workInProgress.sibling;

//     nextUnitOfWork = completeWork(workInProgress);

//     if (siblingFiber !== null) {
//       // If there is a sibling, return it
//       // to perform work for this sibling
//       return siblingFiber;
//     } else if (returnFiber !== null) {
//       // If there's no more work in this returnFiber,
//       // continue the loop to complete the returnFiber.
//       // 这里控制回溯
//       workInProgress = returnFiber;
//       continue;
//     } else {
//       // We've reached the root.
//       // 回溯结束
//       return null;
//     }
//   }
// }

// function completeWork(workInProgress) {
//   log('completeWork ' + workInProgress.name);
//   return null;
// }

// function log(message) {
//   console.log(message);
//   // let node = document.createElement('div');
//   // node.textContent = message;
//   // document.body.appendChild(node);
// }
