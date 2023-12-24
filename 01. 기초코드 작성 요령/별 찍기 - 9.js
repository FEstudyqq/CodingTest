const fs = require('fs');

const input = Number.parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let result = [];

for (let i = 0; i < input; i++) {
  let line = [];

  for (let j = 0; j < i; j++) {
    line.push(' ');
  }

  for (let k = (input - i) * 2 - 1; k > 0; k--) {
    line.push('*');
  }

  result.push(line.join(''));
}

for (let i = 1; i < input; i++) {
  let line = [];

  for (let j = input - i - 1; j > 0; j--) {
    line.push(' ');
  }

  for (let k = 0; k < i * 2 + 1; k++) {
    line.push('*');
  }

  result.push(line.join(''));
}

console.log(result.join('\n'));