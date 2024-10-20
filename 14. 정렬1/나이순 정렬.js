const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path, 'utf-8').trim().split('\n');

const users = inputs.map((it) => it.split(' ')).sort((a, b) => +a[0] - +b[0]);

for (const user of users) {
  const [age, name] = user;

  console.log(age, name);
}
