'use strict'
function dateOutput(ms)
{
  if (typeof ms !== 'number')
  {
    throw new TypeError('Expected a number');
  }

  return {
    years: Math.floor(ms / 31536000000),
    days: Math.floor(ms / 86400000 % 365),
		hours: Math.floor(ms / 3600000 % 24),
		minutes: Math.floor(ms / 60000 % 60),
		seconds: Math.floor(ms / 1000 % 60),
		milliseconds: Math.floor(ms % 1000)
  };
}

function add(key, value, postfix)
{
	if (value > 0)
  {
		key.push(value + postfix);
	}

	return key;
}

function datePrettyFormat(ms, opts) {
	if (typeof ms !== 'number')
  {
		throw new TypeError('Expected a number');
	}

	if (ms < 1000)
  {
		return Math.ceil(ms) + 'ms';
	}

	opts = opts || {};

	var secDecimalDigits = typeof opts.secDecimalDigits === 'number' ? opts.secDecimalDigits : 1;
	var ret = [];
	var parsed = dateOutput(ms);

  ret = add(ret, parsed.years, 'y');
	ret = add(ret, parsed.days, 'd');
	ret = add(ret, parsed.hours, 'h');
	ret = add(ret, parsed.minutes, 'm');

	if (opts.compact)
  {
		ret = add(ret, parsed.seconds, 's');
		return '~' + ret[0];
	}

	ret = add(ret, (ms / 1000 % 60).toFixed(secDecimalDigits).replace(/\.0$/, ''), 's');

	return ret.join(' ');
};

/*
Most of the solutions don't take into account a case that fails when the two dates involved go across a daylight saving change. In this case, the date on which day light saving change happens will have a duration in milliseconds which != 1000*60*60*24, so the typical calculation will fail.

This function returns the difference between two dates representated in a specific format
*/
module.exports = function(a, b, opts)
{
  // UTC time never observes Daylight Savings Time (DST)
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds(), b.getMilliseconds());

  return datePrettyFormat((utc2 - utc1), opts);
}
