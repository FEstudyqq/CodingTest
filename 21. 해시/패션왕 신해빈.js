const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [t, ...inputs] = fs.readFileSync(path).toString().trim().split('\r\n');

function printFashionCase(testCase, n) {
  const closet = {};

  for (const clothes of testCase) {
    const [name, sort] = clothes.split(' ');

    if (sort in closet) closet[sort]++;
    else closet[sort] = 1;
  }

  const answer = Object.values(closet).reduce((cur, pre) => cur * (pre + 1), 1);
  console.log(answer - 1);
}

for (let _ = 0; _ < t; _++) {
  const clothes = [];
  let n = Number(inputs.shift());

  for (let i = 0; i < n; i++) {
    clothes.push(inputs.shift());
  }

  printFashionCase(clothes, n);
}
