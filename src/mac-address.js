const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 * 
 * Адрес MAC-48 состоит из шести групп по две шестнадцатеричные цифры (от 0 до 9 или от A до F).
  * через дефис.
  *
  * Ваша задача — проверить по заданной строке inputString
  * независимо от того, является ли это адрес MAC-48 или нет.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const res = (/^([0-9A-Fa-f]{2}-)([0-9A-Fa-f]{2}-)([0-9A-Fa-f]{2}-)([0-9A-Fa-f]{2}-)([0-9A-Fa-f]{2}-)[0-9A-Fa-f]{2}$/).test(n);
console.log(res);
return res;
}
module.exports = {
  isMAC48Address
};
