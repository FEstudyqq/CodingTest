const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim();

const javaRegex = /^[a-z][a-zA-Z]*$/;
const cppRegex = /^[a-z](?!.*__)[a-z_]*[^_A-Z]$/;

if (javaRegex.test(input)) {
  const cppStyle = input.replace(
    /[A-Z]/g,
    (match) => `_${match.toLowerCase()}`
  );

  console.log(cppStyle);
} else if (cppRegex.test(input)) {
  const javaStyle = input
    .split('_')
    .map((it, i) => (i === 0 ? it : it.charAt(0).toUpperCase() + it.slice(1)));

  console.log(javaStyle.join(''));
} else {
  console.log('Error!');
}
