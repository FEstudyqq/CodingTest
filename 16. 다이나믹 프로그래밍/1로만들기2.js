const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
let n = Number(fs.readFileSync(path));

const db = Array.from({ length: n + 1 }, (v) => 0);

db[2] = 1;
db[3] = 1;

let result = '';

for (let i = 2; i <= n; i++) {
  db[i] = db[i - 1] + 1;
  if (i % 3 === 0) db[i] = Math.min(db[i], db[i / 3] + 1);
  if (i % 2 === 0) db[i] = Math.min(db[i], db[i / 2] + 1);
}
console.log(db[n]);

while (n !== 1) {
  result += n + ' ';
  if (n % 6 === 0) {
    const min = Math.min(db[n - 1], db[n / 3], db[n / 2]);
    if (db[n / 3] === min) n /= 3;
    else if (db[n / 2] === min) n /= 2;
    else if (db[n - 1] === min) n -= 1;
  } else if (n % 3 === 0) {
    const min = Math.min(db[n - 1], db[n / 3]);
    if (db[n / 3] === min) n /= 3;
    else if (db[n - 1] === min) n -= 1;
  } else if (n % 2 === 0) {
    const min = Math.min(db[n - 1], db[n / 2]);
    if (db[n / 2] === min) n /= 2;
    else if (db[n - 1] === min) n -= 1;
  } else {
    n -= 1;
  }
}

console.log(result + 1);
