const router = require('express').Router();
const controller = require('./controller.js');

router.get('/add/:startDate/:endDate', controller.add);
router.get('/fetch/:startDate/:endDate', controller.fetch);

module.exports = router;