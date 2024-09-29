const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let exp = fs.readFileSync(path).toString().trim();
const stack = [];

let ans = '';

const getPriority = (op) => {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
};

for (const e of exp) {
  if (/[A-Z]/.test(e)) ans += e;
  else if (e === '(') stack.push(e);
  else if (e === ')') {
    while (stack.length && stack.at(-1) !== '(') {
      ans += stack.pop();
    }
    if (stack.at(-1) === '(') stack.pop();
  } else {
    while (stack.length && getPriority(stack.at(-1)) >= getPriority(e)) {
      ans += stack.pop();
    }
    stack.push(e);
  }
}
while (stack.length) {
  ans += stack.pop();
}
console.log(ans);
