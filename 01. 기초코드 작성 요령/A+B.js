const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', solution);

function solution() {
  const sum = input.reduce((sum, el) => sum + el, 0);
  console.log(sum);
}
