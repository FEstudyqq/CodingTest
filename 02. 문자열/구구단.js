const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const num = Number(fs.readFileSync(path));

for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
