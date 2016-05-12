module.exports = function(vorpal, config) {
    const logger = config.logger;

    vorpal
        .command('auth', 'Do the auth stuff')
        .action(function(args, callback) {
            logger.info('authing all the things!');
            callback();
        });
}
