const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  readline.close();
  solution(Number(line));
});

function solution(num) {
  const stars = [];
  for (let i = num; i > 0; i--) {
    const whitespace = ' '.repeat(num - i);
    const star = '*'.repeat(i * 2 - 1);
    stars.push(whitespace + star);
  }

  console.log(stars.join('\n'));
  stars.pop();
  console.log(stars.reverse().join('\n'));
}
