const canChoose = function (groups, nums) {
  let i = 0;
  for (let k = 0; k < nums.length && i < groups.length;) {
    if (check(groups[i], nums, k)) {
      k += groups[i].length;
      i++;
    } else {
      k++;
    }
  }
  return i === groups.length;
};

const check = (g, nums, k) => {
  if (k + g.length > nums.length) {
    return false;
  }
  for (let j = 0; j < g.length; j++) {
    if (g[j] !== nums[k + j]) {
      return false;
    }
  }
  return true;
};
