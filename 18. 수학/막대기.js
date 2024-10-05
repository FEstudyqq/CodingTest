const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const x = Number(fs.readFileSync(path));

function solution(x) {
  const sticks = [64];
  let sum = 64;

  while (sum > x) {
    const current = sticks.pop() / 2;
    sum = sticks.reduce((pre, cur) => pre + cur, 0);

    if (current + sum >= x) {
      sticks.push(current);
    } else {
      sticks.push(current);
      sticks.push(current);
    }

    sum = sticks.reduce((pre, cur) => pre + cur);
  }

  return sticks.length;
}

console.log(solution(x));
