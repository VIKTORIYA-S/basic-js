const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * Извлеките сезон из заданной даты и разоблачите вражеского разведчика!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  let month = date.getMonth() + 1;

  if (month >= 1 && month <= 2 || month == 12) {
    return winter;
  }
  if (month >= 3 && month <= 5 ) {
    return spring;
  }
  if (month >= 6 && month <= 8 ) {
    return summer;
  }
  else {
    return autumn;
  }
}

module.exports = {
  getSeason
};
