const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], A] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const lis = [A[0]];

for (let i = 1; i < n; i++) {
  const target = A[i];

  if (lis.at(-1) < target) lis.push(target);
  else {
    let left = 0;
    let right = lis.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (lis[mid] < target) left = mid + 1;
      else right = mid;
    }

    lis[left] = target;
  }
}

console.log(lis.length);
