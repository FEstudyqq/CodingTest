const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const p = Array.from({ length: n }).map((_, idx) => idx);
const parties = inputs.slice(2).map((it) =>
  it
    .split(' ')
    .slice(1)
    .map((it) => Number(it) - 1)
);

const knowingPeople = inputs[1]
  .split(' ')
  .slice(1)
  .map((it) => Number(it) - 1);

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

for (let i = 1; i < knowingPeople.length; i++) {
  union(knowingPeople[0], knowingPeople[i]);
}

for (const party of parties) {
  for (let i = 1; i < party.length; i++) {
    union(party[0], party[i]);
  }
}

let ans = m;
const target = knowingPeople.length > 0 ? find(knowingPeople[0]) : -1;

for (const party of parties) {
  for (const person of party) {
    if (find(person) === target) {
      ans -= 1;
      break;
    }
  }
}

console.log(ans);
