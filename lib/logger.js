'use strict';

const conf = require('rc')('cmdly');
const winston = require('winston');

if (conf.env !== 'dev') {
    winston
        .remove(winston.transports.Console);
}

module.exports = winston;
