const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [t, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

for (const input of inputs) {
  const [h, w, n] = input.split(' ').map(Number);

  const newH = n % h === 0 ? h : n % h;
  const newW = newH === h ? Math.floor(n / h) : Math.ceil(n / h);

  console.log(
    newH.toString() + (newW < 10 ? '0' + newW.toString() : newW.toString())
  );
}
