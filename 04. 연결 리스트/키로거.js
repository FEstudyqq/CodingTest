const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [T, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const alphaRegex = /^[a-zA-Z0-9]$/;

function getPassword(input) {
  const left = [];
  const right = [];

  for (let i = 0; i < input.length; i++) {
    const target = input[i];
    if (target === '<' && left.length > 0) right.push(left.pop());
    else if (target === '>' && right.length > 0) left.push(right.pop());
    else if (target === '-' && left.length > 0) left.pop();
    else if (alphaRegex.test(target)) left.push(target);
  }

  return left.concat(right.reverse()).join('');
}

input.forEach((it) => console.log(getPassword([...it])));
