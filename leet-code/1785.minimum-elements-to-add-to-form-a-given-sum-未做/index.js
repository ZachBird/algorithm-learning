const minElements = function (nums, limit, goal) {
  // eslint-disable-next-line no-undef
  const sum = _.sum(nums);
  const diff = Math.abs(sum - goal);
  return Math.abs(Math.floor((diff + limit - 1) / limit));
};
