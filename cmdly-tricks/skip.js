module.exports = function(vorpal, config) {
    vorpal
        .command('skip', 'Skipping is cool')
        .action(function(args, callback) {
            this.log('Skipping the day away.');
            callback();
        });
};
