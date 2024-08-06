const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const n = Number(inputs[0]);

const recursive = (n) => {
  if (n === 1) return ['*'];

  Stars = recursive(n / 3);
  const L = [];

  for (const S of Stars) {
    L.push(S.repeat(3));
  }
  for (const S of Stars) {
    L.push(S + ' '.repeat(n / 3) + S);
  }
  for (const S of Stars) {
    L.push(S.repeat(3));
  }

  return L;
};

console.log(recursive(n).join('\n'));
