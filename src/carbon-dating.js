const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   if (
     sampleActivity === NaN ||
     parseFloat(sampleActivity) <= 0 ||
     parseFloat(sampleActivity) > 15 ||
     sampleActivity === undefined ||
     typeof sampleActivity != 'string' ||
     !/^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/.test(sampleActivity)
   ) {
     return false;
   } else {
     Year =
       Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
       (Math.LN2 / HALF_LIFE_PERIOD);
     return Math.ceil(Year);
   }
}

module.exports = {
  dateSample
};
