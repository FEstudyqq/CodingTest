const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  readline.close();
  solution(Number(line));
});

function solution(num) {
  for (let i = 0; i < num; i++) {
    const star = ' '.repeat(num - (i + 1)) + '*'.repeat(i + 1);
    console.log(star);
  }
}
