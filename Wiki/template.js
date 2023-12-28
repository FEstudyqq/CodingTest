const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let input = [];

readline
  .on('line', function (line) {
    // input = line.split(' ').map((el) => Number(el));
  })
  .on('close', solution);

function solution() {
  // code
}
