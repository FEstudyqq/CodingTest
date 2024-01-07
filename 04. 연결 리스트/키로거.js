/**
 * @param {string} password 
 */
function solve(password) {
  const left = [];
  const right = [];

  for (const letter of password) {
    if (letter === '<') {
      if (left.length !== 0) {
        right.push(left.pop());
      }
    } else if (letter === '>') {
      if (right.length !== 0) {
        left.push(right.pop());  
      }
    } else if (letter === '-') {
      left.pop();
    } else {
      left.push(letter);
    }
  }
  
  return left.concat(right.reverse()).join('');
}

const fs = require('fs');

const [_, ...passwords] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solved = passwords.map(password => solve(password));

console.log(solved.join('\n'));