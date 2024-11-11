const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
let answer = 0;

const cols = Array(n).fill(false);
const d1 = Array(2 * n - 1).fill(false);
const d2 = Array(2 * n - 1).fill(false);

const bt = (x) => {
  if (x === n) {
    answer += 1;
    return;
  }

  for (let y = 0; y < n; y++) {
    if (cols[y] || d1[x + y] || d2[x - y + n - 1]) continue;

    cols[y] = d1[x + y] = d2[x - y + n - 1] = true;
    bt(x + 1);
    cols[y] = d1[x + y] = d2[x - y + n - 1] = false;
  }
};

bt(0);

console.log(answer);
