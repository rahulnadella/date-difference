'use strict'
var assert = require('assert');
var dateDifference = require('../');
/*
Tests the date-difference w/o options set
*/
describe('date-difference', function() {
  describe('#dateDifferenceWithoutOptions()', function() {
    it('returns the difference between the two dates', function() {
      var date1 = new Date("5/10/2014");
      var date2 = new Date("5/10/2015");

      assert.equal(dateDifference(date1, date2), '1y');

      date1 = new Date("2015-01-25T12:00:00");
      date2 = new Date("2015-03-05T04:01:23");

      assert.equal(dateDifference(date1, date2), '38d 16h 1m 23s');

      date1 = new Date("1980-07-01T03:00:00");
      date2 = new Date("2015-05-27T07:08:07");

      assert.equal(dateDifference(date1, date2), '34y 338d 4h 8m 7s');
    })
  })

  describe('#dateDifferenceWithOptions', function() {
    it('returns the difference between the two dates with specified options', function() {
      var date1 = new Date("2014-05-26T03:00:00");
      var date2 = new Date("2015-05-27T07:08:07");

      assert.equal(dateDifference(date1, date2, {
        compact: true
      }), '~1y');

      date1 = new Date("2015-01-25T12:00:00");
      date2 = new Date("2015-03-05T04:01:23");

      assert.equal(dateDifference(date1, date2, {
        compact: true
      }), '~38d');

      date1 = new Date("2015-04-25T12:00:00");
      date2 = new Date("2015-04-25T16:01:23");

      assert.equal(dateDifference(date1, date2, {
        compact: true
      }), '~4h');
    });

    it('returns the difference between the two dates in timer format "00:00:00"', function() {
      var date1 = new Date("2014-05-26T03:00:00");
      var date2 = new Date("2015-05-27T07:08:07");

      assert.equal(dateDifference(date1, date2, {
        timer: true, compact:true
      }), '~1y');

      date1 = new Date("2015-01-25T12:00:00");
      date2 = new Date("2015-03-05T04:01:23");

      assert.equal(dateDifference(date1, date2, {
        timer: true
      }), '16:01:23');
      

      date1 = new Date("2015-04-25T12:00:00");
      date2 = new Date("2015-04-25T16:01:23");

      assert.equal(dateDifference(date1, date2, {
        timer: true
      }), '04:01:23');
    })
  })
});
