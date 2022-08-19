const busyStudent = function (startTime, endTime, queryTime) {
  const n = startTime.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      ans++;
    }
  }
  return ans;
};
