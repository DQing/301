var Program = require('../modal/Program');

function getPrograms(req, res, next) {

    Program.find({}, (err, data) => {
        if (err) {
            console.log('error')
        }
        res.send(Object.assign(data, {status: 200}));
    });
};

module.exports = {
    getPrograms: getPrograms
};