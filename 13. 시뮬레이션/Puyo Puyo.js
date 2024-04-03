function changeCharacter(str, index, char) {
  const result = str.split('');
  result.splice(index, 1, char);

  return result.join('');
}

function down(field) {
  for (let j = 0; j < 6; j += 1) {
    const line = [];
    
    for (let i = 11; i >= 0; i -= 1) {
      if (field[i][j] !== '.') {
        line.push(field[i][j]);
      }
    }

    if (line.length !== 0) {
      while (line.length < 12) {
        line.push('.');
      }
  
      for (let i = 11; i >= 0; i -= 1) {
        field[i] = changeCharacter(field[i], j, line[11 - i]);
      }
    }
  }
}

function explode(field, x, y, exploded) {
  const color = field[x][y];
  
  const visited = Array.from(Array(12), () => new Array(6).fill(false));

  const coords = [];

  const stack = [[x, y]];

  let size = 0;

  while (stack.length > 0) {
    const [posX, posY] = stack.pop();

    if (posX < 0 || posX >= 12 || posY < 0 || posY >= 6) {
      continue;
    }

    if (visited[posX][posY]) {
      continue;
    }

    if (field[posX][posY] === '.') {
      continue;
    }

    if (field[posX][posY] !== color) {
      continue;
    }

    visited[posX][posY] = true;
    size += 1;
    coords.push([posX, posY]);

    stack.push([posX + 1, posY]);
    stack.push([posX, posY + 1]);
    stack.push([posX - 1, posY]);
    stack.push([posX, posY - 1]);
  }

  if (size >= 4) {
    coords.forEach(([coordX, coordY]) => {
      field[coordX] = changeCharacter(field[coordX], coordY, '.');
    });

    exploded.push(true);
  }
}

function puyo(field) {
  let exploded = [];

  for (let i = 0; i < 12; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      if (field[i][j] !== '.') {
        explode(field, i, j, exploded);
      }
    }
  }

  return exploded.length > 0;
}

const fs = require('fs');

const field = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let result = 0;

while (puyo(field)) {
  result += 1;
  down(field);
}

console.log(result);