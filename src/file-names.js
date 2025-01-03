const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */function renameFiles(names) {
    const nameCount = {}; // объект для отслеживания количества каждого имени
    const result = []; // результирующий массив с уникальными именами

    for (let name of names) {
        if (nameCount[name]) {
            let newName = `${name}(${nameCount[name]})`; // создаем новое имя с суффиксом
            while (nameCount[newName]) { // проверяем, не занято ли новое имя
                nameCount[name]++; // увеличиваем счетчик для исходного имени
                newName = `${name}(${nameCount[name]})`;
            }
            result.push(newName); // добавляем уникальное имя в результат
            nameCount[newName] = 1; // начинаем отслеживать новое имя
        } else {
            result.push(name); // если имя уникально, добавляем его в результат
            nameCount[name] = 1; // начинаем отслеживать имя
        }
    }

    return result; // возвращаем результирующий массив
}

module.exports = {
  renameFiles
};

