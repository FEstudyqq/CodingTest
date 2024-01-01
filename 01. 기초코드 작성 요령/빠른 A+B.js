const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = 0;
const result = [];

readline
  .on('line', function (line) {
    if (T === 0) T = Number(line);
    else {
      const [a, b] = line.split(' ').map(Number);
      result.push(a + b);
    }
  })
  .on('close', function () {
    console.log(result.join('\n'));
  });
