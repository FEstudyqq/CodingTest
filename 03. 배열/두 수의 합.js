const fs = require('fs');

const [_, seriesString, sumString] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const x = Number.parseInt(sumString, 10);

const series = seriesString.split(' ').map(str => Number.parseInt(str, 10));
const sortedSeries = [...series];
sortedSeries.sort((a, b) => a - b);

const len = sortedSeries.length;

let front = 0;
let back = len - 1;

let result = 0;

while (front < back) {
  const sum = sortedSeries[front] + sortedSeries[back];

  if (sum === x) {
    result++;
    back--;
  } else {
    if (sum < x) {
      front++;
    } else {
      back--;
    }
  }
}

console.log(result);