const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
const answer = [];
let count = 0;
// 하노이탑, 시작, 끝, 보조
function hanoi(n, start, end, sub) {
  count++;
  if (n === 1) {
    answer.push([start, end]);
    return;
  }
  hanoi(n - 1, start, sub, end);
  answer.push([start, end]);
  hanoi(n - 1, sub, end, start);
}

hanoi(n, 1, 3, 2);

console.log(count);
for (const [start, end] of answer) {
  console.log(start, end);
}
