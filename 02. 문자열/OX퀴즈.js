const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [t, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');

for (const input of inputs) {
  let score = 0;
  let acc = 0;

  for (const s of input.split('')) {
    if (s === 'O') {
      acc += 1;
      score += acc;
    } else {
      acc = 0;
    }
  }

  console.log(score);
}
