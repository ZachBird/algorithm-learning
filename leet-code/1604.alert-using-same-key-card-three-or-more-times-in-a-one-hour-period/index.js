/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
const time2Min = (timeStr) => {
  const hours = parseInt(timeStr[0], 10) * 10 + parseInt(timeStr[1], 10);
  const minutes = parseInt(timeStr[3], 10) * 10 + parseInt(timeStr[4], 10);
  return hours * 60 + minutes;
};

const alertNames = function (keyName, keyTime) {
  const nameTimeMaps = new Map();

  const n = keyName.length;
  for (let i = 0; i < n; ++i) {
    const curWorkerName = keyName[i];
    const curTime = keyTime[i];
    if (!nameTimeMaps.get(curWorkerName)) {
      nameTimeMaps.set(curWorkerName, [time2Min(curTime)]);
    } else {
      const existTimes = nameTimeMaps.get(curWorkerName);
      existTimes.push(time2Min(curTime));
      nameTimeMaps.set(curWorkerName, existTimes);
    }
  }

  const ans = [];
  for (const workerName of nameTimeMaps.keys()) {
    const curTimes = nameTimeMaps.get(workerName);
    if (curTimes <= 2) continue;

    const sortedTimes = curTimes.sort((a, b) => a - b);
    for (let i = 2; i < sortedTimes.length; ++i) {
      if (sortedTimes[i] - sortedTimes[i - 2] <= 60) {
        ans.push(workerName);
        break;
      }
    }
  }

  return ans.sort();
};
