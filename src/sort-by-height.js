const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 * Учитывая массив с высотами, отсортируйте их, за исключением случаев, когда значение равно -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let filterItem = arr.filter(item => item !== -1);
  console.log(filterItem);
  let sortItem = filterItem.sort((a, b) => a - b);
  console.log(sortItem);
  let result = [...arr];
  let position = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result[i] = sortItem[position];
      position++;
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  sortByHeight
};
