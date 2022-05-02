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
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    // let min = 9;
    // let str = n.toString();
    // let arr = Array.from(str);
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] < min) {
    //     min = arr[i];
    //   }
    // }
    // let k = arr.indexOf(min);
    // if (k >= 0) {
    //   arr.splice(k, 1);
    // }
    // return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
