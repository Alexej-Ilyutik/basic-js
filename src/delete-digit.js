const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    const arr = String(n).split('');
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
      const newArr = [...arr];
      newArr.splice(i, 1);
      const num = +newArr.join('');
      if (num > maxNum) {
        maxNum = num;
      }
    }
    return maxNum;
}

module.exports = {
  deleteDigit
};
