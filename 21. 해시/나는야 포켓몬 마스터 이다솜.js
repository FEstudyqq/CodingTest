const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');
const [n, m] = nm.split(' ').map(Number);
const book = new Map();

for (let i = 0; i < n; i++) {
  const name = inputs[i];
  const idx = (i + 1).toString();
  book.set(idx, name);
  book.set(name, idx);
}

for (let i = n; i < inputs.length; i++) {
  console.log(book.get(inputs[i]));
}
