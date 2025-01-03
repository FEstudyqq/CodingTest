const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = Number(input[0]);
const numbers = input[1].split(' ');

let l = 0;
let r = 0;
const selected = new Set();
let answer = 0;

while (l < len) {
  if (r < len && !selected.has(numbers[r])) {
    selected.add(numbers[r]);
    r += 1;
  } else {
    answer += r - l;
    selected.delete(numbers[l]);
    l += 1;
  }
}

console.log(answer);
