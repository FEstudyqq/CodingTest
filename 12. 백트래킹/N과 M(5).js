const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ').map((it) => Number(it));
const numbers = inputs.split(' ').map((it) => Number(it));
numbers.sort((a, b) => a - b);

let answers = '';

const bt = (current, idx) => {
  if (idx === m) {
    const answer = current.join(' ');
    answers += answer + '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    const target = numbers[i];
    if (current.includes(target)) continue;
    bt([...current, target], idx + 1);
  }
};

for (const num of numbers) {
  bt([num], 1);
}

console.log(answers);
