// // 1차 답변
// const fs = require('fs');
// const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
// const [head, tail] = fs.readFileSync(path).toString().trim().split('\r\n');
// const p = tail.split(' ').map((it, i) => [Number(it), i + 1]);

// const waitAtm = p.sort((a, b) => a[0] - b[0]).map((it) => it[0]);

// const result = [];

// waitAtm.reduce((pre, cur) => {
//   result.push(pre + cur);
//   return pre + cur;
// }, 0);

// console.log(result.reduce((pre, cur) => pre + cur));

// 2차 수정
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const result = [];

const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => Number(a) - Number(b));

times.reduce((pre, cur) => {
  result.push(pre + cur);
  return pre + cur;
}, 0);

console.log(result.reduce((pre, cur) => pre + cur));
