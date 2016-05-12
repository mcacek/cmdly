'use strict';

const _ = require('lodash');
const conf = require('rc')('cmdly');
const vorpal = require('vorpal');
const cmdlyCore = require('./cmdly-core');
const cmdlyTricks = require('./cmdly-tricks');

const app = vorpal();

app.use(cmdlyCore);
app.use(cmdlyTricks);

if (conf.extensions) {
    _.each(conf.extensions, (extension) => {
        app.use(extension);
    })
}

app
  // .show()
  .parse(process.argv);
