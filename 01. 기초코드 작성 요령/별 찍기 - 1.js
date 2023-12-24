const fs = require('fs');

const input = Number.parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let result = '';

for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);