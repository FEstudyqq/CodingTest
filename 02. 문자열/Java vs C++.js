const fs = require('fs');

/**
 * @param {string} str
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} str 
 */
function isUpperCase(str) {
  return str.split('').every(character => character.toUpperCase() === character);
}

/**
 * @param {string} variableName 
 */
function isCpp(variableName) {
  const letters = variableName.split('');

  if (letters[0] === '_') {
    return false;
  }

  if (letters[letters.length - 1] === '_') {
    return false;
  }

  if (variableName.includes('__')) {
    return false;
  }

  if (letters.filter(letter => letter !== '_').some(isUpperCase)) {
    return false;
  }

  return true;
}

/**
 * @param {string} variableName 
 */
function isJava(variableName) {
  const letters = variableName.split('');

  if (variableName.includes('_')) {
    return false;
  }

  if (isUpperCase(letters[0])) {
    return false;
  }

  return true;
}

/**
 * @param {string} variableName 
 */
function javaToCpp(variableName) {
  let result = '';

  variableName.split('').forEach(value => {
    if (isUpperCase(value)) {
      result += '_';
    }

    result += value.toLowerCase();
  });

  return result;
}

/**
 * @param {string} variableName 
 */
function cppToJava(variableName) {
  const [first, ...last] = variableName.split('_');

  return [first, ...last.map(capitalizeFirstLetter)].join('');
}

const input = fs.readFileSync('/dev/stdin').toString().trim();

if (isCpp(input)) {
  console.log(cppToJava(input));
} else if (isJava(input)) {
  console.log(javaToCpp(input));
} else {
  console.log('Error!');
}