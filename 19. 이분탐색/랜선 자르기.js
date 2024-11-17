const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, k] = inputs[0].split(' ').map(Number);
const lines = inputs
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let left = 1;
let right = lines.at(-1);
let ans = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 0;

  for (const line of lines) {
    cnt += Math.floor(line / mid);
  }

  if (cnt < k) right = mid - 1;
  else {
    left = mid + 1;
    ans = mid;
  }
}

console.log(ans);
