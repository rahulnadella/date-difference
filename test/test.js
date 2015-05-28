'use strict'
var assert = require('assert');
var dateDifference = require('../');

describe('date-difference', function(){
  describe('#dateDifferenceByDays()', function(){
    it('returns the difference between dates in milliseconds', function()
    {
      var date1 = new Date("5/27/2014");
      var date2 = new Date("5/27/2015");

      assert.equal(dateDifference(date1, date2), '1y');

      date1 = new Date("2015-01-25T12:00:00");
      date2 = new Date("2015-03-05T04:01:23");

      assert.equal(dateDifference(date1, date2), '38d 16h 1m 23s');

      date1 = new Date("1980-07-01T03:00:00");
      date2 = new Date("2015-05-27T07:08:07");

      assert.equal(dateDifference(date1, date2), '34y 338d 4h 8m 7s');
    })
  })
});
