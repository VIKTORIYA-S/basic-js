const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 * Учитывая число, замените это число на
  * сумму его цифр, пока не получим однозначное число.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let sum = 0;
    let arr = String(n).split('');
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    if (sum > 9) {
        return getSumOfDigits(sum);
    } else {
        return sum;
    }
}


module.exports = {
  getSumOfDigits
};
