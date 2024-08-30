const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const p = Array.from({ length: n + 1 }).map((_, idx) => idx);

const find = (a) => {
  if (p[a] !== a) {
    p[a] = find(p[a]);
  }
  return p[a];
};

const union = (a, b) => {
  const pA = find(a);
  const pB = find(b);

  p[pB] = pA;
};

for (let i = 1; i <= m; i++) {
  const [op, a, b] = inputs[i].split(' ').map(Number);

  if (op) {
    console.log(find(a) === find(b) ? 'YES' : 'NO');
  } else {
    union(a, b);
  }
}
