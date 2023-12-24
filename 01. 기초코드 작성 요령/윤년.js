const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let year = 0;

readline
  .on('line', function (line) {
    year = parseInt(line);
  })
  .on('close', solution);

function solution() {
  isLeapYear() ? console.log(1) : console.log(0);
}

function isLeapYear() {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
