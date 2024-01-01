// 10804

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ranges = [];

readline
  .on('line', function (line) {
    const [start, end] = line.split(' ').map(Number);
    ranges.push([start, end]);
  })
  .on('close', solution);

function solution() {
  const cards = Array.from({ length: 21 }).map((_, i) => i);

  ranges.forEach(([start, end]) => {
    const reversed = cards.slice(start, end + 1).reverse();
    cards.splice(start, end - start + 1, ...reversed);
  });

  cards.shift();
  console.log(cards.join(' '));
}
