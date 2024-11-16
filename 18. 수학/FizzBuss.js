const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

for (let i = 0; i < 3; i++) {
  if (!isNaN(inputs[i])) {
    const num = +inputs[i] + 3 - i;

    if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz');
    else if (num % 3 === 0) console.log('Fizz');
    else if (num % 5 === 0) console.log('Buzz');
    else console.log(num);
    break;
  }
}
