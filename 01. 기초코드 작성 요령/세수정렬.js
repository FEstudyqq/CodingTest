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
  const sorted = input.sort((a, b) => Number(a) - Number(b));
  console.log(sorted.join(' '));
}
