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
  for (let i = 1; i <= num; i++) {
    const star = '*'.repeat(i);
    const whitespace = ' '.repeat(num - i);
    stars.push(star + whitespace + whitespace + star);
  }

  console.log(stars.join('\n'));
  stars.pop();
  console.log(stars.reverse().join('\n'));
}
