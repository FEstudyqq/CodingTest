const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = fs.readFileSync(path).toString().trim().replaceAll('9', '6');
let result = 0;

for (let i = 0; i < 9; i++) {
  const cnt = i === 6 ? (n.split(i).length - 1) / 2 : n.split(i).length - 1;
  result = result > cnt ? result : cnt;
}
console.log(Math.ceil(result));
