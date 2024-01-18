const fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +n;
let count = 0;

for (let i = 0; i < N; i++) {
  const stack = [];
  let string = arr[i].split('\r');
  string = string[0].split('');
  for (const s of string) {
    if (stack[stack.length - 1] === s) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  if (stack.length === 0) {
    count++;
  }
}

console.log(count);
