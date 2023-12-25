const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 * Дана матрица, прямоугольная матрица целых чисел,
  * просто сложите все значения, которые не отображаются ниже "0"
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      const elem = matrix[i][j];
      if (elem === 0) {
        break;
      }
      sum = sum + elem;
    }
  }
  console.log(sum)
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
