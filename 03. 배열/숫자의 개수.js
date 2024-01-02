const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const mul = input.reduce((pre, cur) => pre * cur, 1).toString();

for (let i = 0; i <= 9; i++) {
  const result = mul.split(i).length - 1;
  console.log(result);
}
