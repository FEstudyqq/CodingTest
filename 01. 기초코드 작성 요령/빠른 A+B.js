const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const numList = input.map((it) => it.split(' '));
let answer = '';

for (const [a, b] of numList) {
  const result = Number(a) + Number(b);
  answer += result + '\n';
}

console.log(answer);
