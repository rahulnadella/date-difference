'use strict'
var prettyMs = require('pretty-ms')

/*
Returns the difference between two dates representated in a specific format
*/
module.exports = function(a, b, opts)
{
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return prettyMs(utc2 - utc1, opts);
}
