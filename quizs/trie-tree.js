class Trie {
  static N = 10; // 直接设置为十万级
  constructor () {
    this.trie = new Array(Trie.N).fill(0).map(() => new Array(26).fill(0));
    this.count = new Array(10).fill(0);
    this.index = 0;
  }

  insert (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      const u = str.charCodeAt(i) - 'a'.charCodeAt();
      if (this.trie[p][u] === 0) {
        this.trie[p][u] = ++this.index;
      };
      p = this.trie[p][u];
    }
    this.count[p] += 1;
    console.log(this.trie);
    console.log(this.count);
  }

  search (str) {

  }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('ape');
// trie.insert('app');
// trie.insert('apf');
trie.insert('apply');
