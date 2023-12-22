const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 * Учитывая некоторое целое число, найдите максимальное число, которое вы можете получить
  * удалив ровно одну цифру заданного числа.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = n.toString();
  console.log(stringN);
  let number = 0;
  for (let i = 0; i < stringN.length; i++) {
      let newNumber = stringN.slice(0, i) + stringN.slice(i + 1);
      if (newNumber > number) {
        number = + newNumber;
      }
  }
  console.log(number)
  return number;
}


module.exports = {
  deleteDigit
};
