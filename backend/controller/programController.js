var Program = require('../modal/Program');

exports.getPrograms = function () {

    Program.find({}, (err, data) => {
        if (err) {
            console.log('error')
        }
        return Object.assign(data, {status: 200});
    });

}
