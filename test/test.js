'use strict'
var assert = require('assert');
var dateDifference = require('../');

describe('date-difference', function(){
  describe('#dateDifferenceByDays()', function(){
    it('returns the difference between dates in milliseconds', function()
    {
      var date1 = new Date("5/27/2014");
      var date2 = new Date("5/27/2015");

      assert.equal(dateDifference(date1, date2), '365d');
    })
  })
});
