const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input = line.split(' ').map(Number);
}).on('close', function () {
  solution();
});

function solution() {
  // code
}
