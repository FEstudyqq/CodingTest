const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const map = new Map();

for (let i = 0; i < n; i++) {
  const [url, pw] = inputs[i].split(' ');
  map.set(url, pw);
}

for (let i = n; i < n + m; i++) {
  console.log(map.get(inputs[i]));
}
