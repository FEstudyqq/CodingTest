const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  readline.close();
  solution(Number(line));
});

function solution(num) {
  for (let i = 1; i <= num; i++) {
    const whitespace = ' '.repeat(num - i);
    const star = '*'.repeat(i * 2 - 1);
    console.log(whitespace + star);
  }
}
