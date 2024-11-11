const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const t = Number(inputs.splice(0, 1)[0]);

const getGCM = (a, b) => {
  for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
};

for (const input of inputs) {
  const [a, b] = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const gcm = getGCM(a, b);
  console.log((a / gcm) * (b / gcm) * gcm);
}
