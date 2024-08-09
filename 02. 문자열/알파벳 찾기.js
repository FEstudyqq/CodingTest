const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const s = fs.readFileSync(path).toString().trim();

const answer = [];

for (let i = 97; i < 123; i++) {
  answer.push(s.indexOf(String.fromCharCode(i)));
}

console.log(...answer);
