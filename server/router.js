const router = require('express').Router();
const controllers = require('./controllers/boards.js');

router.get('/boards', controllers.getBoard);
router.post('/boards', controllers.postBoard);

module.exports = router;