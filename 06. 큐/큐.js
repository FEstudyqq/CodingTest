const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const q = [];
const ans = [];
for (const input of inputs) {
  const [comment, num] = input.split(' ');

  const len = q.length;

  if (comment === 'size') ans.push(len.toString());
  else if (comment === 'empty') ans.push(len ? '0' : '1');
  else if (comment === 'front') ans.push(len ? q[0].toString() : '-1');
  else if (comment === 'back') ans.push(len ? q[len - 1].toString() : '-1');
  else if (comment === 'pop') {
    if (len === 0) {
      ans.push('-1');
      continue;
    }
    ans.push(q.shift(num).toString());
  } else if (comment === 'push') {
    q.push(num);
    continue;
  }
}

console.log(ans.join('\n'));
