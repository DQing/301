var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Program = mongoose.model('Program', {
    _id: String,
    title: String,
    creator: String,
    createTime: String,
});

module.exports = Program;