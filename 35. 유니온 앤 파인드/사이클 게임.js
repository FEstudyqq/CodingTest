const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const p = Array.from({ length: n }, (_, idx) => idx);

const find = (a) => {
  if (a !== p[a]) p[a] = find(p[a]);

  return p[a];
};

const union = (a, b) => {
  const pA = find(a);
  const pB = find(b);

  if (pA === pB) return true;

  p[pB] = pA;
};

let ans = 0;
for (let i = 0; i < m; i++) {
  const [a, b] = inputs[i];

  if (union(a, b)) {
    ans = i + 1;
    break;
  }
}

console.log(ans);
