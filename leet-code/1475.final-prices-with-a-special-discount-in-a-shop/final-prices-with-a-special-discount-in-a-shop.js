/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 模拟 时间复杂度 n^2 略高，需要优化
const finalPrices = function (prices) {
  return prices.map((price, index, originArr) => {
    let discount = 0;
    for (let i = index + 1; i < prices.length; ++i) {
      if (originArr[i] <= price) {
        discount = originArr[i];
        break;
      }
    }
    return price - discount;
  });
};
