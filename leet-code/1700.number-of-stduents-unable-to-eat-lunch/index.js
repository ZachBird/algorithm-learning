/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
  // 模拟题
  let curN = 0;
  while (sandwiches.length && curN !== students.length) {
    const topSandwich = sandwiches[0];
    const topStudent = students[0];
    if (topSandwich === topStudent) {
      sandwiches.shift();
      students.shift();
      curN = 0;
    } else {
      const top = students.shift();
      students.push(top);
      curN++;
    }
  }
  return curN;
};
