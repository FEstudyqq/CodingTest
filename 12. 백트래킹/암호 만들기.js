const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [lc, inputs] = fs.readFileSync(path).toString().trim().split('\n');
const [l, c] = lc.split(' ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const letters = inputs.split(' ').sort();
const passwords = [];

const isVowel = (letter) => {
  return vowels.includes(letter);
};

const backTracking = (pw, n, vCnt, cCnt) => {
  if (n >= Number(l)) {
    if (vCnt >= 1 && cCnt >= 2) passwords.push(pw.join(''));
    return;
  }
  for (const letter of letters) {
    if (pw[n - 1] >= letter) continue;
    if (vowels.includes(pw)) continue;

    if (isVowel(letter)) {
      backTracking([...pw, letter], n + 1, vCnt + 1, cCnt);
    } else {
      backTracking([...pw, letter], n + 1, vCnt, cCnt + 1);
    }
  }
};

for (const letter of letters) {
  if (isVowel(letter)) {
    backTracking([letter], 1, 1, 0);
  } else {
    backTracking([letter], 1, 0, 1);
  }
}

for (const password of passwords) {
  console.log(password);
}
