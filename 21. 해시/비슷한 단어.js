const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\r\n');
const n = Number(inputs[0]);
const words = inputs.slice(1).sort();
const wordsMap = new Map();

for (let i = 1; i <= n; i++) {
  wordsMap.set(inputs[i], i);
}
wordsMap.set('-', 20001);

let maxSameLen = 0;
let q = [];
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const s = words[i];
    const t = words[j];

    let currentSameLen = 0;
    for (let k = 0; k < Math.min(s.length, t.length); k++) {
      if (s[k] !== t[k]) break;
      currentSameLen = k + 1;
    }

    if (maxSameLen < currentSameLen) {
      maxSameLen = currentSameLen;
      q = [[s, t]];
    } else if (maxSameLen === currentSameLen) {
      q.push([s, t]);
    }
  }
}

let ansS = '-';
let ansT = '-';

if (q.length) {
  for (let i = 0; i < q.length; i++) {
    let s, t;

    if (wordsMap.get(q[i][0]) < wordsMap.get(q[i][1])) {
      s = q[i][0];
      t = q[i][1];
    } else {
      s = q[i][1];
      t = q[i][0];
    }

    if (wordsMap.get(s) < wordsMap.get(ansS)) {
      ansS = s;
      ansT = t;
    } else if (
      wordsMap.get(s) === wordsMap.get(ansS) &&
      wordsMap.get(t) < wordsMap.get(ansT)
    ) {
      ansT = t;
    }
  }

  console.log(ansS);
  console.log(ansT);
} else {
  console.log(words[0]);
  console.log(words[1]);
}
