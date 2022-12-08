/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function (coordinates) {
  const [letter, digtal] = coordinates;
  const x = letter.charCodeAt() - 'a'.charCodeAt();
  const y = parseInt(digtal);
  return ((x + y) & 1) === 0;
};
