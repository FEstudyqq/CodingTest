const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim();
const number = inputs.match(/\d+/g).map(Number);
const operator = inputs.match(/[+-]/g);

let answer = number.shift();

let trigger = false;
if (operator) {
  for (let i = 0; i < operator.length; i++) {
    if (!trigger) {
      if (operator[i] === '+') answer += number[i];
      else {
        trigger = true;
        answer -= number[i];
      }
    } else {
      answer -= number[i];
    }
  }
}
console.log(answer);
