var express = require('express');
var router = express.Router();
var programController = require('../controller/programController');

router.get('/api/programs', programController.getPrograms);

module.exports = router;
