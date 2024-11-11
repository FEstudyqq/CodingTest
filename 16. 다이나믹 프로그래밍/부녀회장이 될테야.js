const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const apart = Array.from({ length: 15 }, () =>
  Array.from({ length: 14 }, (_, i) => i + 1)
);

for (let i = 1; i <= 14; i++) {
  for (let j = 0; j < 14; j++) {
    if (j === 0) apart[i][j] = apart[i - 1][j];
    else {
      apart[i][j] = apart[i][j - 1] + apart[i - 1][j];
    }
  }
}

let front = 1;

while (front < inputs.length) {
  const i = inputs[front++];
  const j = inputs[front++];

  console.log(apart[i][j - 1]);
}
