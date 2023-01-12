const db = require('../db/index.js');

function loadBoard(callback) {

}

function saveBoard(data, callback) {
  console.log('data in models post is ', data);
  const numString = data.numbers.toString();
  const resString = data.resources.toString();
  const colString = data.colors.toString();
  console.log('string is ', numString, resString, colString);
  db.query(`INSERT INTO boards (numbers, resources, colors) VALUES ('${numString}', '${resString}', '${colString}')`)
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err, null);
    })
}

module.exports = { loadBoard, saveBoard };