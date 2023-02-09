/**
 * @param {number} timeToLive
 */
const AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.tokenMap = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.tokenMap.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if ((this.tokenMap.get(tokenId) || 0) > currentTime) {
    this.tokenMap.set(tokenId, currentTime + this.timeToLive);
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  let count = 0;
  for (const expireTime of this.tokenMap.values()) {
    if (expireTime > currentTime) count++;
  }
  return count;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
