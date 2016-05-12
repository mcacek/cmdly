'use strict';

const conf = require('rc')('cmdly');
const vorpal = require('vorpal');
const cmdlyCore = require('./cmdly-core');
const cmdlyTricks = require('./cmdly-tricks');

const app = vorpal();

app.use(cmdlyCore);
app.use(cmdlyTricks);

if (conf.extensions) {
    console.log(conf.extensions);
    // app.use(cmdlyTricks);
}

app
  // .show()
  .parse(process.argv);
