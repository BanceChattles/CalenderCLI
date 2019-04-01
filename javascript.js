var _ = require('lodash');
var moment = require('moment');
const MomentRange = require('moment-range');
const chalk = require('chalk');

var months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
for (i = 0; i< months.length; i++)
{console.log(moment().month(i).format("MMMM"))
console.log(_.pad(day, 8))
console.log(_.chunk(days, 7));};




//console.log(moment().date(1).format('DD'));