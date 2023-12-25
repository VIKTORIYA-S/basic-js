const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }

  const result = matrix.map((element) => count(element)).reduce((a, b) => a + b);
  return result;
}

function count(array) {
  const result = array.filter((element) => element === '^^').length;
  return result;
}


module.exports = {
  countCats
};
