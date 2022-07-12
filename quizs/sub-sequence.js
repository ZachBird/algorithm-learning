const arr = [10, 9, 2, 5, 3, 7, 101, 18];

// 返回所有递增序列，用递归，暴力写
function getAllSubSequence (nums) {
  function recursion (nums, i, last, result = []) {
    if (nums[i] > last) {
      result.push(nums[i]);
      recursion(nums, i, last + 1, result);
    }
    return result;
  }
  for (let i = 0; i < nums.length; ++i) {
    console.log(recursion(i, nums[i]));
  }
}
getAllSubSequence(arr);

function lengthOfLIS (nums) {
  const dfs = (i, last) => {
    if (i === nums.length) return 1;

    let len = dfs(i + 1, last);
    if (nums[i] > last) len = Math.max(len, dfs(i + 1, nums[i]) + 1);
    return len;
  };

  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // 8 7 6
    res = Math.max(res, dfs(i, nums[i]));
  }

  return res;
}

lengthOfLIS();
