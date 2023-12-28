// 2576

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const oddNumbers = [];

readline
  .on('line', function (line) {
    const num = Number(line);
    if (isOdd(num)) {
      oddNumbers.push(num);
    }
  })
  .on('close', solution);

function isOdd(num) {
  return num % 2 !== 0;
}

function solution() {
  if (oddNumbers.length === 0) {
    console.log(-1);
    return;
  }

  let min = Number.MAX_SAFE_INTEGER;
  const sum = oddNumbers.reduce((sum, num) => {
    min = num < min ? num : min;
    return sum + num;
  }, 0);
  console.log(sum);
  console.log(min);
}
