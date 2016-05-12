'use strict';

const conf = require('rc')('cmdly');
const winston = require('winston');

if (conf.env !== 'dev') {
    winston
        .add(winston.transports.File)
        .remove(winston.transports.Console);
}

module.exports = winston;
