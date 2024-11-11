const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim().replaceAll('()', '0');
const stack = [];
let count = 0;

for (const target of input) {
  if (target === '(') stack.push('(');
  if (target === '0') count += stack.length;
  if (target === ')') {
    stack.pop();
    count += 1;
  }
}
console.log(count);
