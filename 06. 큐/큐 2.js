const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\r\n');

const command = input.map((it) => it.split(' '));
const que = [];
let popped = 0;
let result = '';

for (cmd of command) {
  let queLen = (que.length - popped).toString();
  switch (cmd[0]) {
    case 'size':
      result += queLen + '\n';
      break;
    case 'empty':
      result += (queLen == '0' ? '1' : '0') + '\n';
      break;
    case 'front':
      result += (queLen == '0' ? '-1' : que[popped]) + '\n';
      break;
    case 'back':
      result += (queLen == '0' ? '-1' : que[que.length - 1]) + '\n';
      break;
    case 'pop':
      if (queLen === '0') result += '-1\n';
      else {
        result += que[popped] + '\n';
        popped++;
      }
      break;
    case 'push':
      que.push(cmd[1]);
  }
}

console.log(result);
