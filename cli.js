#!/usr/bin/env node

'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var dateDifference = require('./');

var cli = meow({
  help: [
    'Usage',
    '  date-difference <firstDate> <secondDate> [--compact]',
    '  echo <firstDate> <secondDate> | date-difference',
    '',
    'Example',
    ' date1 = new Date("2015-01-25T12:00:00");',
    ' date2 = new Date("2015-03-05T04:01:23");',
    '                                         ',
    ' date-difference date1 date2',
    ' => 38d 16h 1m 23s',
    '',
    'Options',
    '  --compact    Only show the first unit'
  ].join('\n')
});

function init(date1, date2) {
  console.log(dateDifference(Date(date1), Date(date2), {
    compact: cli.flags.compact
  }));
}

if (process.stdin.isTTY) {
  if (!cli.input[0] && !cli.input[1]) {
    console.error('`Two Dates` are required');
    process.exit(1);
  }

  init(cli.input[0], cli.input[1]);
} else {
  getStdin(init);
}
