const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [h, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

if (h * 60 + m >= 45) {
  const newH = Math.floor((h * 60 + m - 45) / 60);
  const newM = (h * 60 + m - 45) % 60;
  console.log(newH, newM);
} else {
  const newH = Math.floor(((h + 24) * 60 + m - 45) / 60);
  const newM = ((h + 24) * 60 + m - 45) % 60;
  console.log(newH, newM);
}
