const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 * Даны две строки, найдите количество общих символов между ними.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const frequency1 = {};
  const frequency2 = {};
  let commonCount = 0;

  for (const char of s1) {
    if (frequency1[char]) {
      frequency1[char]++;
    } else {
      frequency1[char] = 1;
    }
  }

  for (const char of s2) {
    if (frequency2[char]) {
      frequency2[char]++;
    } else {
      frequency2[char] = 1;
    }
  }

  for (const char in frequency1) {
    if (frequency2[char]) {
      commonCount += Math.min(frequency1[char], frequency2[char]);
    }
  }

  return commonCount;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};




  // Подсчет частоты появления символов в первой строке


  // Подсчет частоты появления символов во второй строке


  // Подсчет общих символов


// Пример использования
// const str1 = "apple";
// const str2 = "peach";
// console.log(commonCharactersCount(str1, str2));
// // Вывод: 3 (символы 'a', 'p' и 'e')

