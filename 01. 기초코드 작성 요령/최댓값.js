const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

readline
  .on('line', function (line) {
    numbers.push(Number(line));
  })
  .on('close', solution);

function solution() {
  const [maxValue, maxIndex] = numbers.reduce(
    ([maxValue, maxIndex], num, i) => {
      if (maxValue < num) {
        maxValue = num;
        maxIndex = i;
      }
      return [maxValue, maxIndex];
    },
    [-1, -1],
  );
  console.log(maxValue);
  console.log(maxIndex + 1);
}
