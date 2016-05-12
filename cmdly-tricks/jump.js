module.exports = function(vorpal, config) {
    vorpal
        .command('jump', 'Jumping is rad')
        .action(function(args, callback) {
            this.log('Jumping up and down.');
            callback();
        });
};
