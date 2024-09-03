const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const [n, m, k] = inputs[0].split(' ').map(Number);
const A = inputs[1].split(' ').map(Number);
const infos = inputs.slice(2);
const p = Array.from({ length: n }).map((_, idx) => Number(idx));

const find = (a) => {
  if (p[a] !== a) {
    p[a] = find(p[a]);
  }
  return p[a];
};

const union = (a, b) => {
  const pa = find(a);
  const pb = find(b);

  if (A[pa] < A[pb]) p[pb] = pa;
  else p[pa] = pb;
};

for (const info of infos) {
  const [v, w] = info.split(' ').map((it) => Number(it) - 1);

  union(v, w);
}

for (let i = 0; i < n; i++) {
  p[i] = find(i);
}

let sum = 0;
for (const target of new Set(p)) {
  let min = 10001;
  for (let i = 0; i < n; i++) {
    if (p[i] === target && min > A[i]) min = A[i];
  }
  sum += min;
}

if (sum > k) console.log('Oh no');
else console.log(sum);
