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
  let array = ("" + n).split("").map(Number)

let newArr = Math.min(...array);

let minIndex = array.indexOf(newArr)

  array.splice(minIndex, 1);
  let newNumber = +array.join('');
  return newNumber;
}


module.exports = {
  deleteDigit
};
