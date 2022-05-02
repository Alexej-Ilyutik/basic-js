const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  let addition = String(options.addition);
    let arr = [];
    let secondArr = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      secondArr.push(addition);
    }
    secondArr = secondArr.join(options.additionSeparator);
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(str);
      arr[i] = arr[i] + secondArr;
    }
    return arr.join(options.separator);
}

module.exports = {
  repeater
};
