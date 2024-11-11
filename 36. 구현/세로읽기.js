const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

let ans = '';

for (let j = 0; j < 15; j++) {
  for (let i = 0; i < 5; i++) {
    if (inputs[i][j] === undefined) continue;
    ans += inputs[i][j];
  }
}

console.log(ans);
