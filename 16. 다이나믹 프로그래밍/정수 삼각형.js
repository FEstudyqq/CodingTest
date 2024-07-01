const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().split('\r\n');
const triangle = inputs.map((it) => it.split(' ').map((it) => Number(it)));

for (let i = 1; i < Number(n); i++) {
  for (let j = 0; j < triangle[i].length; j++) {
    if (j === 0) {
      triangle[i][j] += triangle[i - 1][0];
      continue;
    } else if (j === triangle[i].length - 1) {
      triangle[i][j] += triangle[i - 1][j - 1];
      continue;
    } else {
      triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }
}

console.log(Math.max(...triangle[Number(n) - 1]));
