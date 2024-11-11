const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let cnt = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0 && input[i][j] === 'F') cnt += 1;
  }
}

console.log(cnt);
