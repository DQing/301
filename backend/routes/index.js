var express = require('express');
var router = express.Router();
var Program = require('../modal/Program');

/* GET home page. */
router.get('/api', function (req, res, next) {

    Program.find({}, (err, data) => {
        if (err) {
            console.log('error')
        }
        res.send(Object.assign(data, {status: 200}));
    });
});

module.exports = router;
