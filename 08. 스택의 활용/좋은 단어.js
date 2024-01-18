const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...words] = fs.readFileSync(path).toString().trim().split('\n');

let count = 0;

function isGoodWord(word) {
  const stack = [];

  for (const w of word) {
    if (stack[stack.length - 1] === w) stack.pop();
    else stack.push(w);
  }

  return stack.length === 0 ? 1 : 0;
}

for (const word of words) {
  count += isGoodWord(word);
}

console.log(count);
