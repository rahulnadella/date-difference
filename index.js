'use strict'

module.exports = function(a, b)
{
  var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MILLISECONDS_PER_DAY);
}
