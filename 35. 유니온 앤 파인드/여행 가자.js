const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const plans = inputs[inputs.length - 1].split(' ').map(Number);
const p = Array.from({ length: n }).map((_, idx) => idx);

const find = (a) => {
  if (a !== p[a]) {
    p[a] = find(p[a]);
  }

  return p[a];
};

const union = (i, j) => {
  const pI = find(i);
  const pJ = find(j);

  p[pJ] = pI;
};

for (let i = 2; i < inputs.length - 1; i++) {
  const input = inputs[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (input[j] && i - 2 < j) {
      union(i - 2, j);
    }
  }
}

let ans = [];

for (const plan of plans) {
  ans.push(find(plan - 1));
}

const set = new Set(ans);
console.log(set.size === 1 ? 'YES' : 'NO');
