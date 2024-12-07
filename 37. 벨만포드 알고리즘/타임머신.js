const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, k], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const distance = Array(n + 1).fill(Infinity);

distance[1] = 0;

let hasNegativeCycle = false;
for (let i = 1; i <= n; i++) {
  for (const [a, b, c] of inputs) {
    if (distance[a] !== Infinity && distance[b] > distance[a] + c) {
      distance[b] = distance[a] + c;

      if (i === n) hasNegativeCycle = true;
    }
  }
}

if (hasNegativeCycle) console.log(-1);
else {
  for (let i = 2; i <= n; i++) {
    console.log(distance[i] === Infinity ? -1 : distance[i]);
  }
}
