/**
 * @param {string[]} folder
 * @return {string[]}
 */
// 字典树
class Tria {
  constructor () {
    return {
      pIdx: -1,
      children: new Map()
    };
  }
}

const removeSubfolders = function (folder) {
  const triaRoot = new Tria();

  // 构造字典树
  for (let i = 0; i < folder.length; ++i) {
    const paths = folder[i].split('/').slice(1);
    let curNode = triaRoot;
    for (const path of paths) {
      if (!curNode.children.has(path)) {
        curNode.children.set(path, new Tria());
      }
      curNode = curNode.children.get(path);
    }
    curNode.pIdx = i;
  }

  const ans = [];

  const dfs = (curNode) => {
    if (curNode.pIdx !== -1) {
      console.log(curNode);
      ans.push(folder[curNode.pIdx]);
      return;
    }
    for (const child of curNode.children.values()) {
      dfs(child);
    }
  };

  dfs(triaRoot);

  return ans;
};

removeSubfolders(['/a', '/a/b/c', '/a/b/d']);
