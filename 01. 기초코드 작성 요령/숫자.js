// 10093

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A = 0;
let B = 0;

readline
  .on('line', function (line) {
    [A, B] = line
      .split(' ')
      .map(Number)
      .sort((a, b) => Number(a) - Number(b));
  })
  .on('close', solution);

function solution() {
  const cnt = getCount();
  const numbers = [];
  for (let num = A + 1; num < B; num++) {
    numbers.push(num);
  }

  console.log(cnt);
  console.log(numbers.join(' '));
}

function getCount() {
  let cnt = B - A - 1;
  return cnt < 0 ? 0 : cnt;
}
