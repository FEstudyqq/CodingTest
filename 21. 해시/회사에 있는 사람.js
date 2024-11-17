const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const set = new Set();

for (const input of inputs) {
  const [name, status] = input.split(' ');

  if (status === 'enter') set.add(name);
  else set.delete(name);
}

const ans = Array.from(set).sort().reverse();
console.log(ans.join('\n'));
