const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim();
const len = input.length;
let ans = 1;

for (let i = 0; i < len / 2; i++) {
  if (input[i] !== input[len - i - 1]) {
    ans = 0;
    break;
  }
}

console.log(ans);
