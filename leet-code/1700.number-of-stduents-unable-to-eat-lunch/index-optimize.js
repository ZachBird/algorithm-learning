/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
  // 模拟题
  // 因为两个数组移动没有约束条件，所以可以转化为，计数问题
  // 即：学生数组中，与三明治数组中，不同种类面包的数量
  const category = new Array(2).fill(0);
  for (const stduent of students) category[stduent]++;
  for (let i = 0; i < sandwiches.length; ++i) {
    // 下面的判断条件不行，因为必须要是两个数量不相等发生的时候，才可以判定此时栈顶的永远不会有匹配项
    // if (category[sandwiches[i]]-- === 0) {
    if (--category[sandwiches[i]] === -1) {
      return students.length - i;
    }
  }
  return 0;
};
