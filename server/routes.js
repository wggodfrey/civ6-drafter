const controller = require('./controller');

const router = require('express').Router();
router.route('/civs').get(controller.civs.get);

module.exports = router;