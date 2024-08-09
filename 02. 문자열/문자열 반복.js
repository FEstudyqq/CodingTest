const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

for (const input of inputs) {
  const r = Number(input.split(' ')[0]);
  const s = input
    .split(' ')[1]
    .split('')
    .map((it) => it.repeat(r));

  console.log(s.join(''));
}
