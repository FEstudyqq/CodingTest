const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const endIndex = input.findIndex(
    (string) => string === 'what does the fox say?',
  );
  const testCase = input.splice(0, endIndex + 1);
  testCase.pop(); // 'what does fox say?' 원소 제거

  const recordedSounds = testCase.shift().split(' ');
  const otherSays = new Set(testCase.map((sound) => sound.split(' ')[2]));
  const foxSays = recordedSounds.filter((sound) => !otherSays.has(sound));
  console.log(...foxSays);
}
