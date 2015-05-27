'use strict'
var prettyMs = require('pretty-ms')

module.exports = function(a, b)
{
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return prettyMs(utc2 - utc1);
}
