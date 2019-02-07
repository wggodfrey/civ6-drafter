const controller = require('./controller');

const router = require('express').Router();

router.route('/civs/:ruleset_id').get(controller.civs.get);

module.exports = router;
