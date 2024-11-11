const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
let [n, m] = inputs[0].split(' ').map(Number);
const tree = inputs[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...tree);
let ans = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (const t of tree) {
    if (t > mid) {
      sum += t - mid;
    }
  }

  if (sum >= m) {
    ans = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
