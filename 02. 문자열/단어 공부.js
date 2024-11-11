const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim().toUpperCase();
const wordSet = new Set(input);
const wordCnt = [];

for (const w of wordSet) {
  const wCnt = input.split(w).length - 1;
  wordCnt.push([w, wCnt]);
}
const sortedWordCnt = wordCnt.sort((a, b) => b[1] - a[1]);

if (sortedWordCnt.length === 1 || sortedWordCnt[0][1] !== sortedWordCnt[1][1]) {
  console.log(sortedWordCnt[0][0]);
} else {
  console.log('?');
}
