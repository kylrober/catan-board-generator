const models = require('../models/boards.js');

function getBoard(req, res) {
  models.loadBoard((err, result) => {
    if (err) {
      console.log('err in controller get is ', err);
      res.status(404).send();
    } else {
      console.log('result in controller get is ', result);
      res.status(200).send(result);
    }
  });
}

function postBoard(req, res) {
  console.log('data in controller post is ', req.body);
  models.saveBoard(req.body, (err, result) => {
    if (err) {
      console.log('err in controller post is ', err);
      res.status(404).send();
    } else {
      res.status(201).send(req.body);
    }
  })
}

module.exports = { getBoard, postBoard};