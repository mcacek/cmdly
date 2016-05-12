const logger = require('../lib/logger');
const doIt = require('./do-it');
const auth = require('./auth');

module.exports = function(vorpal) {
    const config = {
        logger: logger
    };

    auth(vorpal, config);
    doIt(vorpal, config);
}
