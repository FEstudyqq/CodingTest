const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const white = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const black = [1, 1, 2, 2, 2, 8];

let ans = '';
for (let i = 0; i < white.length; i++) {
  ans += black[i] - white[i] + ' ';
}

console.log(ans.trim());
