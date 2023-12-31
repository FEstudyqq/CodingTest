// 2480

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  const [a, b, c] = line.split(' ').map(Number).sort();
  readline.close();
  console.log(solution(a, b, c));
});

function solution(a, b, c) {
  if (a === b && b === c) {
    return a * 1_000 + 10_000;
  } else if (a === b || b === c) {
    return b * 100 + 1_000;
  } else {
    return c * 100;
  }
}
