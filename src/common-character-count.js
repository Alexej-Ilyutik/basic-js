const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let count = 0;
   let s3 = s2.split('');
   let s4 = s1.split('');
   for (let i = 0; i < s4.length; i++) {
     for (let j = 0; j < s3.length; j++) {
       if (s4[i] === s3[j]) {
         count++;
         s3.splice(j, 1);
         break;
       }
     }
   }
   return count;
}

module.exports = {
  getCommonCharacterCount
};
