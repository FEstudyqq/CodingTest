const fs = require('fs');
const [n, ...permutation] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const record = []; // 연산 기록
const stack = [0];
let num = 1;

for (let target of permutation) {
  while (stack[stack.length - 1] < target) {
    record.push('+');
    stack.push(num);
    num++;
  }

  if (stack[stack.length - 1] === target) {
    record.push('-');
    stack.pop();
  } else {
    break;
  }
}

if (record.length === n * 2) {
  console.log(record.join('\n'));
} else {
  console.log('NO');
}
