const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [_, inputs] = fs.readFileSync(path).toString().trim().split('\r\n');

let sosuCnt = 0;

const isSoSu = (n) => {
  if (n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

for (const input of inputs.split(' ')) {
  const n = Number(input);

  if (isSoSu(n)) sosuCnt += 1;
}

console.log(sosuCnt);
