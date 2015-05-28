# date-difference [![Build Status](https://travis-ci.org/rahulnadella/date-difference.svg?branch=master)](https://travis-ci.org/rahulnadella/date-difference)

>Most of the solutions don't take into account a case that fails when
the two dates involved go across a daylight saving change. In this case,
the date on which day light saving change happens will have a duration in
milliseconds which != 1000*60*60*24, so the typical calculation will fail.

>This function returns the difference between two dates represented in
a specific format => ``34y 338d 4h 8m 7s``

##Usage

``=> npm install -save date-difference``

```
var dateDifference = require('date-difference');

dateDifference(new Date('7/1/2015'), new Date('7/1/2016'));
=> '1y'

dateDifference(new Date("1980-07-01T03:00:00"), new Date("2015-05-27T07:08:07"));
=> '34y 338d 4h 8m 7s'

// compact option
dateDifference(new Date("2015-04-25T12:00:00"), new Date("2015-04-25T16:01:23"), {compact: true});
=> '~4h'

```

##CLI

``=> npm install --global date-difference``

```
  => date-difference --help
  
  Calculates the difference between two dates
  
  Usage
    date-difference <firstDate> <secondDate> [--compact]
    echo <firstDate> <secondDate> | date-difference
    
  Example
   date1 = new Date("2015-01-25T12:00:00");
   date2 = new Date("2015-03-05T04:01:23");
   
   date-difference date1 date2
   => 38d 16h 1m 23s
   
  Options
    --compact    Only show the first unit
    
```

##License

MIT License --> A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source. There are many variations of this license in use.
