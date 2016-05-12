'use strict';

module.exports = function(vorpal, config) {
    const logger = config.logger;

    vorpal
        .command('doIt', 'does it')
        .action(function(args, callback) {
            logger.info('doing it!');
            callback();
        });
};
