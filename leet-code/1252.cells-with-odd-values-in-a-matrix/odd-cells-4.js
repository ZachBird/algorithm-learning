// TODO: 后面有时间回顾一下这个方法
// 位运算
// 更进一步，我们可以使用两个 long 变量 c1c1 和 c2c2 来分别充当行和列的计数数组，当 c1c1 的第 kk 位为 11，代表第 kk 行累加值为奇数，当 c1c1 的第 kk 位为 00，代表第 kk 行累加值为偶数；c2c2 的计数规则同理。而翻转二进制中的某一位可使用「异或」操作。

// 当处理完所有的 ins 之后，可通过「遍历 c1c1 的低 mm 位 + 遍历 c2c2 的低 nn 位」来得到行数中奇数个数 aa，列数中奇数个数 bb，复杂度为 O(m + n)O(m+n)；也可以使用 bitCount 统计 long 二进制数中 11 的个数（本质是分治操作），复杂度为 O(\log{64})O(log64)。

// 代码：

// JavaJavaTypeScriptPython3

// class Solution {
//     public int oddCells(int m, int n, int[][] ins) {
//         long c1 = 0, c2 = 0;
//         for (int[] info : ins) {
//             c1 ^= 1L << info[0];
//             c2 ^= 1L << info[1];
//         }
//         int a = 0, b = 0;
//         for (int i = 0; i < m; i++) a += ((c1 >> i) & 1);
//         for (int i = 0; i < n; i++) b += ((c2 >> i) & 1);
//         return a * (n - b) + (m - a) * b;
//     }
// }
// 时间复杂度：处理所有的 ins 复杂度为 O(l)O(l)，其中 ll 为数组 ins 的长度；使用遍历方式统计奇数行和奇数列个数复杂度为 O(m + n)O(m+n)；使用 bitCount 操作统计二进制中 11 个数，复杂度为 O(\log{C})O(logC)，其中 C = 64C=64 为 long 二进制数长度，整体复杂度为 O(l + m + n)O(l+m+n) 或 O(l + \log{C})O(l+logC)
// 空间复杂度：O(1)O(1)

// 作者：AC_OIer
// 链接：https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/solution/by-ac_oier-p0za/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
