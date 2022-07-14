class Trie {
  static N = 10;
  constructor () {
    this.trie = new Array(Trie.N).fill(0).map(() => new Array(26).fill(0));
    // 记录以某长度结尾的词有多少，实际上是用来在查找时确定尾部的
    this.tailCount = new Array(10).fill(0);
    this.index = 0;
  }

  insert (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      const u = str.charCodeAt(i) - 'a'.charCodeAt();
      if (this.trie[p][u] === 0) this.trie[p][u] = ++this.index;
      p = this.trie[p][u];
    }
    this.tailCount[p] += 1;
    // console.log(this.trie);
    // console.log(this.tailCount);
  }

  search (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      const u = str.charCodeAt(i) - 'a'.charCodeAt();
      if (this.trie[p][u] === 0) return false;
      p = this.trie[p][u];
    }
    return this.tailCount[p] !== 0;
  }

  startWith (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      const u = str.charCodeAt(i) - 'a'.charCodeAt();
      if (this.trie[p][u] === 0) return false;
      p = this.trie[p][u];
    }
    return true;
  }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('ape');
// trie.insert('app');
// trie.insert('apf');
trie.insert('apply');
console.log(trie.search('ape'));
console.log(trie.search('applea'));
console.log(trie.startWith('appl'));
console.log(trie.startWith('ac'));
