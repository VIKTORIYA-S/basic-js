const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 * Создайте повторяющуюся строку на основе заданных параметров.
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
  str = String(str); 
  options.addition = options.addition !== undefined ? String(options.addition) : ''; 
  let addition = new Array(options.additionRepeatTimes || 1).fill(options.addition).join(options.additionSeparator || '|'); 
  let repeatedString = new Array(options.repeatTimes || 1).fill(str + addition).join(options.separator || '+'); 
  return repeatedString;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
