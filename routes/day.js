const router = require('express').Router();
const controllerDays = require('../controllers/days.js');

router.get('/is-weekend/:date', controllerDays.isWeekend);
router.get('/is-leap-year/:year', controllerDays.isLeapYear);

module.exports = router;