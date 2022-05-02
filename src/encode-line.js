const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let arr = str.split('');

  // let newArr = arr.reduce((accum, elem) => {
  //   accum[elem] = (accum[elem] || 0) + 1;
  //   return accum;
  // }, {});
  // let rez = [];
  // for (const lett in newArr) {
  //   const num = newArr[lett];
  //   if (num > 1) {
  //     rez.push(num);
  //     rez.push(lett);
  //   } else {
  //     rez.push(lett);
  //   }
  // }
  // return rez.join('');
}

module.exports = {
  encodeLine
};
