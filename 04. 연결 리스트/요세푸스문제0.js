const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, k] = fs.readFileSync(path).toString().split(' ').map(Number);

const q = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];

while (q.length) {
  for (let i = 0; i < k; i++) {
    q.push(q.shift());
  }

  answer.push(q.pop());
}
console.log('<' + answer.join(', ') + '>');
