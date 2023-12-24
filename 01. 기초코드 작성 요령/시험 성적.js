const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

readline
  .on('line', function (line) {
    input = parseInt(line);
  })
  .on('close', solution);

function solution() {
  if (input >= 90) {
    console.log('A');
  } else if (input >= 80) {
    console.log('B');
  } else if (input >= 70) {
    console.log('C');
  } else if (input >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}
