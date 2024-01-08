const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

const [n, k] = input.map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];

let count = 1;
while (arr.length) {
  const data = arr.shift();
  if (count % k === 0) {
    answer.push(data);
  } else {
    arr.push(data);
  }
  count++;
}
console.log(`<${answer.join(', ')}>`);
