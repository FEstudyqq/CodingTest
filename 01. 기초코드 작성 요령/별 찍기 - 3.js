const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  readline.close();
  solution(Number(line));
});

function solution(num) {
  for (let i = num; i > 0; i--) {
    console.log('*'.repeat(i));
  }
}
