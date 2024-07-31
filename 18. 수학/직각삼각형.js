const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const triangles = inputs.splice(0, inputs.length - 1);

for (const triangle of triangles) {
  const [a, b, c] = triangle
    .split(' ')
    .map((it) => Number(it))
    .sort((a, b) => a - b);

  if (a ** 2 + b ** 2 === c ** 2) console.log('right');
  else console.log('wrong');
}
