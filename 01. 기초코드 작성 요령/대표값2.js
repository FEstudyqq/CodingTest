// 2587

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
  const average = getAverage();
  const median = getMedian();
  console.log(average);
  console.log(median);
}

function getAverage() {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

function getMedian() {
  const sorted = numbers.sort((a, b) => Number(a) - Number(b));
  const index = Math.floor(numbers.length / 2);
  return sorted[index];
}
