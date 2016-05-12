const jump = require('./jump');
const skip = require('./skip');

module.exports = function(vorpal) {
    jump(vorpal);
    skip(vorpal);
};
