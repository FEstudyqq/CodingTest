// 50분
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path, 'utf-8').trim().split('\r\n');
const lines = inputs
  .map((it) => it.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let ans = 0;
let start = lines[0][0];
let end = lines[0][1];

for (let i = 0; i < Number(n); i++) {
  const [nStart, nEnd] = lines[i];

  if (nStart <= end) {
    if (end <= nEnd) end = nEnd;
    else continue;
  } else {
    ans += end - start;
    start = nStart;
    end = nEnd;
  }
}

ans += end - start;

console.log(ans);
