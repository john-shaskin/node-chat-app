const moment = require('moment');
// 0 -> Jan 1 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(151, 'y').subtract(7, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am (padded version minutes, unpadded for hours)
var date = moment();
console.log(date.format('h:mm a'));

var createdAt = new Date().getTime();
var mo = moment(createdAt);
console.log((date.format('MMM Do, YYYY h:mm a')));
