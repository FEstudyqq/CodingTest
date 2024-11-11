const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

for (let i = 1; i <= n; i++) {
  console.log(i);
}
