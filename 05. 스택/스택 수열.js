const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const numbers = inputs.map((it) => Number(it));

let temp = 0;
const stack = [0];
const result = [];
let targetIdx = 0;

while (targetIdx < numbers.length) {
  if (stack.length === 0) break;
  const i = stack.length - 1;
  const target = numbers[targetIdx];

  if (stack[i] < target) {
    temp += 1;
    result.push('+');
    stack.push(temp);
  } else if (stack[i] === target) {
    result.push('-');
    stack.pop();
    targetIdx += 1;
  } else if (stack[i] > target) {
    break;
  }
}

if (stack.length !== 1) console.log('NO');
else console.log(result.join('\n'));
