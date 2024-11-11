const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs.shift());
const timetable = inputs
  .map((it) => it.split(' ').map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let currentIdx = 0;
let [start, end] = timetable[currentIdx];
let currentCnt = 1;

for (let i = currentIdx + 1; i < n; i++) {
  const [nextStart, nextEnd] = timetable[i];
  if (end <= nextStart) {
    currentCnt += 1;
    [start, end] = timetable[i];
  }
}
console.log(currentCnt);
