const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input.shift();

function password(str) {
  const front = [];
  const back = [];
  str.forEach(kp => {
    if (kp === '-') {
      front.length === 0 || front.pop();
    } else if (kp === '>') {
      back.length === 0 || front.push(back.pop());
    } else if (kp === '<') {
      front.length === 0 || back.push(front.pop());
    } else {
      front.push(kp);
    }
  });
  console.log(front.join('') + back.reverse().join(''));
}

for (let i = 0; i < T; i++) {
  password(input[i].split(''));
}
