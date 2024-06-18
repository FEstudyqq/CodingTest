/**
 * @param {string[]} password 
 */
function isValidPassword(password) {
  const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
  const vowels = 'aeiou'.split('');

  const consonantsInPassword = [];
  const vowelsInPassword = [];

  for (let i = 0; i < password.length; i += 1) {
    const letter = password[i];

    if (consonants.includes(letter)) {
      consonantsInPassword.push(letter);
    } else if (vowels.includes(letter)) {
      vowelsInPassword.push(letter);
    } else {}
  }

  return consonantsInPassword.length >= 2 && vowelsInPassword.length >= 1;
}

/**
 * @param {string[]} temp 
 * @param {string} letter 
 */
function isValidLetter(temp, letter) {
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] >= letter) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number} L 
 * @param {number} C 
 * @param {string[]} letters 
 * @param {string[]} temp 
 * @param {string[]} result 
 */
function backtrack(L, C, letters, temp, result) {
  if (L === 0) {
    // if temp contains one moeum, two jaeum
    if (isValidPassword(temp)) {
      result.push(temp.join(''));
    }

    return;
  }

  for (let i = 0; i < C; i += 1) {
    const letter = letters[i];

    if (isValidLetter(temp, letter)) {
      temp.push(letter);
      backtrack(L - 1, C, letters, temp, result);
      temp.pop();
    }
  }
}

const fs = require('fs');
const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [L, C] = first.split(' ').map((num) => Number.parseInt(num, 10));
const letters = second.split(' ');
letters.sort();

/**
 * @type {string[]}
 */
const temp = [];

/**
 * @type {string[]}
 */
const result = [];

backtrack(L, C, letters, temp, result);

console.log(result.join('\n'));