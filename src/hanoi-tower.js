const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

    // Общее количество ходов для решения головоломки Ханойских башен
    const turns = Math.pow(2, disksNumber) - 1;

    // Время в секундах, необходимое для выполнения всех ходов
    const seconds = Math.floor(turns / (turnSpeed / 3600));

    // Возвращаем объект с количеством ходов и временем в секундах
    return { turns, seconds };

  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
