const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

    class DepthCalculator {
      calculateDepth(arr) {
        if (!Array.isArray(arr)) return 0; // Проверка, является ли arr массивом
        let depth = 1; // Начальная глубина
        for (let item of arr) {
          if (Array.isArray(item)) {
            depth = Math.max(depth, this.calculateDepth(item) + 1);
          }
        }
        return depth;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
